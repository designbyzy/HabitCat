import imgImage5 from "./e23fcb8c3ae965e82b22d80f38fee93fe1364e85.png";
import imgWeGoJim1 from "./0d6a34fcc3293e8b4ae73b99b2bf7b1086c99b56.png";

function Group() {
  return (
    <div className="absolute contents left-[134px] text-[#fdfc60] top-[270px]">
      <p className="absolute font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[0.95] left-[134px] text-[96px] top-[270px] tracking-[-3.84px] whitespace-nowrap">Mission</p>
      <p className="absolute font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] left-[134px] text-[0px] top-[426px] tracking-[-0.72px] w-[643px]">
        <span className="leading-[1.4] text-[36px]">{`At `}</span>
        <span className="font-['Sabaling:Regular',sans-serif] leading-[1.4] text-[36px]">HabitCat</span>
        <span className="leading-[1.4] text-[36px]">, we want to help those who are struggling to set healthy habits more intuitively and effortlessly, in a nostalgic and fun way.</span>
      </p>
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.4] left-[134px] text-[48px] top-[687px] tracking-[-0.96px] w-[645px]">Goodbye, boring tracking.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[134px] top-[270px]">
      <Group />
      <div className="absolute h-[345px] left-[917px] top-[395px] w-[388px]" data-name="Image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="absolute h-[130px] left-[965px] top-[270px] w-[321px]" data-name="We go JIM! 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWeGoJim1} />
      </div>
    </div>
  );
}

export default function Mission() {
  return (
    <div className="bg-[#f464b2] relative w-full h-full min-h-screen" data-name="Mission">
      <Group1 />
    </div>
  );
}