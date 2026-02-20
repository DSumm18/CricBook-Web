import Link from 'next/link';

type DemoCardPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

const readParam = (value: string | string[] | undefined) => {
  if (!value) return '';
  return Array.isArray(value) ? value[0] || '' : value;
};

const toInt = (value: string, fallback: number) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export default function DemoCardPage({ searchParams }: DemoCardPageProps) {
  const name = readParam(searchParams?.name) || 'Jay Patel';
  const endorsements = toInt(readParam(searchParams?.endorsements), 32);
  const runs = toInt(readParam(searchParams?.runs), 684);
  const wickets = toInt(readParam(searchParams?.wickets), 19);
  const referralCode = readParam(searchParams?.ref).toUpperCase();
  const deepLink = referralCode
    ? `cricbook://create-profile?ref=${encodeURIComponent(referralCode)}`
    : 'cricbook://create-profile';

  return (
    <main className="min-h-screen bg-[#EBF3EC] px-4 py-10 text-[#1E2B22]">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 rounded-2xl border border-[#CFE0D1] bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3D6B48]">CricBook Demo Experience</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">
            Facebook-style match feed. LinkedIn-style cricket proof.
          </h1>
          <p className="mt-3 text-sm md:text-base text-[#486050] max-w-3xl">
            This is what a player and their teammates see: authentic weekly moments, fast social reactions, and public endorsement credibility.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D8E6DA] bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#4C7B57]">Feed Moment</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-[#1B5E20] text-white grid place-items-center text-xl">🏏</div>
              <div>
                <p className="font-extrabold">{name}</p>
                <p className="text-xs text-[#7A8A7E]">Saturday League • 2h ago</p>
              </div>
              <span className="ml-auto rounded-full bg-[#FFF3E0] px-3 py-1 text-xs font-bold text-[#C75A00]">🔥 In Form</span>
            </div>
            <p className="mt-4 text-[15px] leading-6">
              64* off 39, chased 142 with 3 overs left. Pressure on, team delivers.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['#ClubCricket', '#WeekendWin', '#CricBook'].map((tag) => (
                <span key={tag} className="rounded-full bg-[#E8F5E9] px-3 py-1 text-xs font-bold text-[#1B5E20]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-5 border-t border-[#EEF2EE] pt-3 text-sm font-semibold text-[#5A6A5D]">
              <span>👍 18</span>
              <span>🏏 11</span>
              <span>💬 7</span>
              <span className="ml-auto text-[#1B5E20]">Share</span>
            </div>
          </article>

          <article className="rounded-2xl border border-[#20422B] bg-gradient-to-b from-[#12311F] to-[#0A2115] p-5 text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#A8D5AE]">Public Endorsement Proof</p>
            <h2 className="mt-2 text-3xl font-black">{name}</h2>
            <p className="mt-1 text-[#CDE8D1]">{endorsements} endorsements from teammates</p>
            <div className="mt-4 grid gap-2">
              <div className="rounded-lg bg-white/10 px-3 py-2 text-sm font-bold">🤝 Inspiring Teammate x12</div>
              <div className="rounded-lg bg-white/10 px-3 py-2 text-sm font-bold">🧠 Great Captain x9</div>
              <div className="rounded-lg bg-white/10 px-3 py-2 text-sm font-bold">💪 Solid Batter x11</div>
            </div>
            <div className="mt-5 rounded-lg border border-[#315F42] bg-[#143A25] p-3">
              <p className="text-xs uppercase tracking-wide text-[#A6D0AE]">Verified Season Snapshot</p>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xl font-black">{runs}</p>
                  <p className="text-[11px] text-[#B9DABB]">Runs</p>
                </div>
                <div>
                  <p className="text-xl font-black">{wickets}</p>
                  <p className="text-[11px] text-[#B9DABB]">Wickets</p>
                </div>
                <div>
                  <p className="text-xl font-black">22</p>
                  <p className="text-[11px] text-[#B9DABB]">Matches</p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-6 rounded-2xl border border-[#D6E2D7] bg-white p-6">
          <h3 className="text-lg font-extrabold text-[#1E3A26]">What the user experiences</h3>
          <div className="mt-3 grid gap-2 text-sm text-[#44584A]">
            <p>1. Posts a real match moment after Saturday game.</p>
            <p>2. Teammates react/comment/endorse inside minutes.</p>
            <p>3. Endorsement card becomes shareable proof on socials.</p>
            <p>4. Invited teammates join and continue the loop.</p>
          </div>
          <div className="mt-5 flex flex-col md:flex-row gap-3">
            <a
              href={deepLink}
              className="rounded-xl bg-[#1B5E20] px-5 py-3 text-center font-extrabold text-white no-underline hover:opacity-95"
            >
              Open App Demo
            </a>
            <Link
              href={referralCode ? `/join?ref=${encodeURIComponent(referralCode)}` : '/join'}
              className="rounded-xl border border-[#BDD2C0] px-5 py-3 text-center font-bold text-[#1B5E20] no-underline hover:bg-[#F3F8F4]"
            >
              Open Invite Landing
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
