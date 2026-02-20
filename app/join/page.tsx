import Link from 'next/link';

type JoinPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

const readParam = (value: string | string[] | undefined) => {
  if (!value) return '';
  return Array.isArray(value) ? value[0] || '' : value;
};

export default function JoinPage({ searchParams }: JoinPageProps) {
  const referralCode = readParam(searchParams?.ref).toUpperCase();
  const deepLink = referralCode
    ? `cricbook://create-profile?ref=${encodeURIComponent(referralCode)}`
    : 'cricbook://create-profile';

  return (
    <main className="min-h-screen bg-[#0F2B18] text-white px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-[#28563A] bg-gradient-to-b from-[#143722] to-[#0C2115] p-8 shadow-2xl">
          <p className="text-[#A5D6A7] font-semibold tracking-wide text-xs uppercase">CricBook Invite</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
            You&apos;ve been invited to CricBook
          </h1>
          <p className="mt-3 text-[#D7E8D9] text-sm md:text-base">
            Join your club&apos;s social match feed, endorsements, and leaderboards. Built for UK cricket communities.
          </p>

          <div className="mt-6 rounded-xl bg-[#1B3B28] border border-[#2F5E43] p-4">
            <p className="text-xs text-[#9BC8A4] uppercase tracking-wider">Referral Code</p>
            <p className="text-2xl font-black mt-1">{referralCode || 'NONE'}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={deepLink}
              className="rounded-xl bg-[#FFC107] text-black text-center font-extrabold py-3 px-4 no-underline hover:opacity-95"
            >
              Open CricBook App
            </a>
            <Link
              href={`/demo-card${referralCode ? `?name=Club%20Player&endorsements=32&ref=${encodeURIComponent(referralCode)}` : ''}`}
              className="rounded-xl border border-[#3A6D4E] text-white text-center font-bold py-3 px-4 no-underline hover:bg-[#173926]"
            >
              View Demo Profile Card
            </Link>
          </div>

          <p className="mt-6 text-xs text-[#9BC8A4]">
            If the app does not open, install CricBook and use code <span className="font-bold">{referralCode || 'NONE'}</span> during profile setup.
          </p>
        </div>
      </div>
    </main>
  );
}
