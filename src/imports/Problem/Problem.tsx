function Group() {
  return (
    <div className="absolute contents left-[605px] top-[234px]">
      <p className="absolute font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[0.95] left-[605px] text-[96px] top-[234px] tracking-[-3.84px] w-[450.897px]">Problem</p>
      <div className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] left-[605px] text-[0px] top-[390px] tracking-[-0.72px] w-[720px]">
        <p className="leading-[1.4] mb-0 text-[36px] whitespace-pre-wrap">But, it can take an average of <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold">66 days</span> or more for a habit to kick in.</p>
        <p className="leading-[1.4] mb-0 text-[36px] whitespace-pre-wrap">​</p>
        <p className="leading-[1.4] mb-0 text-[36px] whitespace-pre-wrap">Habit tracking apps don’t stick:</p>
        <ul className="list-disc pl-8">
          <li className="mb-2">
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[36px]">boring</span>
          </li>
          <li className="mb-2">
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[36px]">daunting</span>
          </li>
          <li className="mb-2">
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[36px]">distracting</span>
          </li>
          <li className="mb-2">
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[36px]">annoying</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[114px] text-[#fdfc60] top-[234px]">
      <Group />
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] left-[114px] text-[0px] top-[234px] tracking-[-1.28px] w-[341px]">
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[64px]">Habits</span>
        <span className="leading-[1.4] text-[64px]">{` `}</span>
        <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] text-[64px]">{`kick in when `}</span>
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[64px]">{`motivation `}</span>
        <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] text-[64px]">{`or `}</span>
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[64px]">energy</span>
        <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] text-[64px]">{` is `}</span>
        <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] text-[64px]">low</span>
        <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.4] text-[64px]">{`. `}</span>
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <div className="bg-[#f464b2] relative w-full h-full min-h-screen" data-name="Problem">
      <Group1 />
    </div>
  );
}