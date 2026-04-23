export default function ExperienceMapEnhanced() {
  const steps = [
    {
      number: '01',
      title: 'Setup Your Goals',
      description: 'Choose which habits you want to track: exercise, reading, hydration, meditation, etc.',
      emoji: '🎯'
    },
    {
      number: '02',
      title: 'Place Your Device',
      description: 'Position your device in a visible spot where you perform your habits.',
      emoji: '📍'
    },
    {
      number: '03',
      title: 'Live Your Life',
      description: 'Go about your day naturally. Passively detects when you complete habits.',
      emoji: '✨'
    },
    {
      number: '04',
      title: 'Get Visual Feedback',
      description: 'Watch your digital cat react with animations and celebrations as you build streaks.',
      emoji: '🎉'
    },
    {
      number: '05',
      title: 'Build Consistency',
      description: 'Your cat grows happier over time, motivating you to maintain your healthy habits.',
      emoji: '📈'
    }
  ];

  return (
    <div className="bg-[#f464b2] relative min-h-screen px-[134px] py-[134px]" data-name="Experience Map Enhanced">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-[#fdfc60] text-[64px] tracking-[-2.56px] text-center mb-8">
        How does <span className="font-['Sabaling:Regular',sans-serif]">HabitCat</span> work?
      </p>

      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] text-[#fdfc60] text-[32px] text-center mb-16 max-w-[900px] mx-auto">
        A seamless habit tracking experience that works in the background
      </p>

      {/* Interactive Flow */}
      <div className="grid grid-cols-1 gap-8 max-w-[1000px] mx-auto mb-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative"
            style={{
              opacity: 0,
              animation: `slideInRight 0.6s ease-out ${index * 0.15}s forwards`
            }}
          >
            <div className="flex items-start gap-6">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-[100px] h-[100px] rounded-full bg-[#fdfc60] flex items-center justify-center shadow-lg">
                <span className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[#f464b2] text-[48px]">
                  {step.number}
                </span>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-[#c2f5ff] rounded-[20px] p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-[56px]">{step.emoji}</span>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#3b2e42] text-[36px] leading-[1.2] mb-3 tracking-[-1.44px]">
                      {step.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#3b2e42] text-[24px] leading-[1.4]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="ml-[50px] h-12 w-1 bg-[#fdfc60] opacity-40 mx-auto" />
            )}
          </div>
        ))}
      </div>

      {/* Demo Placeholder */}
      <div className="bg-[#d9d9d9] rounded-[64px] p-16 text-center max-w-[1093px] mx-auto">
        <div className="mb-6">
          <span className="text-[120px]">🎬</span>
        </div>
        <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[#3b2e42] text-[48px] leading-[1.2] tracking-[-1.92px] mb-4">
          Interactive Demo Coming Soon
        </p>
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#3b2e42] text-[28px] leading-[1.4]">
          Experience <span className="font-['Sabaling:Regular',sans-serif]">HabitCat</span> in action with our working prototype
        </p>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
