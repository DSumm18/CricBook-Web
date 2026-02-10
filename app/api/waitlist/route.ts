import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readFile } from 'fs/promises';
import path from 'path';

interface WaitlistEntry {
  email: string;
  role: string;
  timestamp: number;
}

const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json');

async function ensureDirectoryExists() {
  try {
    await mkdir(path.dirname(WAITLIST_FILE), { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
  }
}

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await readFile(WAITLIST_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeWaitlist(entries: WaitlistEntry[]) {
  await ensureDirectoryExists();
  await writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const validRoles = ['player', 'club', 'league', 'coach', 'parent'];
    if (!body.role || !validRoles.includes(body.role)) {
      return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
    }

    const waitlist = await readWaitlist();

    // Check for duplicate email
    const existingEntry = waitlist.find(entry => entry.email === body.email);
    if (existingEntry) {
      return NextResponse.json({ message: 'Already on waitlist' }, { status: 200 });
    }

    // Add new entry
    const newEntry: WaitlistEntry = {
      email: body.email,
      role: body.role,
      timestamp: Date.now()
    };

    waitlist.push(newEntry);
    await writeWaitlist(waitlist);

    return NextResponse.json({ message: 'Added to waitlist' }, { status: 201 });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}