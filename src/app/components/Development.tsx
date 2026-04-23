export default function Development() {
  const phases = [
    {
      title: 'Research & Ideation',
      description: 'User interviews, competitive analysis, and brainstorming sessions to understand habit formation challenges',
      timeline: 'Week 1-2',
      deliverables: ['User personas', 'Journey maps', 'Problem statements']
    },
    {
      title: 'Wireframing',
      description: 'Low-fidelity sketches and digital wireframes exploring physical product interactions',
      timeline: 'Week 3-4',
      deliverables: ['Paper sketches', 'Digital wireframes', 'User flows']
    },
    {
      title: 'Prototyping',
      description: 'Building functional prototypes with Arduino and sensors for habit tracking',
      timeline: 'Week 5-8',
      deliverables: ['Circuit diagrams', 'Sensor integration', 'Working prototype']
    },
    {
      title: 'User Testing',
      description: 'Testing with target users and iterating based on feedback',
      timeline: 'Week 9-10',
      deliverables: ['Test results', 'User feedback', 'Refined design']
    },
    {
      title: 'Final Refinement',
      description: 'Polish interactions, improve cat animations, and finalize product design',
      timeline: 'Week 11-12',
      deliverables: ['Final prototype', 'Documentation', 'Presentation']
    }
  ];

  return (
    <div className="bg-[#f464b2] relative min-h-screen px-[134px] py-[134px]" data-name="Development">
      <div className="relative">
        <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-[#fdfc60] text-[96px] tracking-[-3.84px] mb-16">
          Development Process
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[40px] top-0 bottom-0 w-1 bg-[#fdfc60] opacity-30" />

          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative mb-12 pl-24"
              style={{
                opacity: 0,
                animation: `slideIn 0.6s ease-out ${index * 0.15}s forwards`
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[25px] top-8 w-[30px] h-[30px] rounded-full bg-[#fdfc60] border-4 border-[#f464b2] shadow-lg" />

              {/* Content card */}
              <div className="bg-[#c2f5ff] rounded-[20px] p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[#3b2e42] text-[48px] leading-[1.1] tracking-[-1.92px]">
                    {phase.title}
                  </h3>
                  <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#f464b2] text-[24px] bg-[#fdfc60] px-6 py-2 rounded-full whitespace-nowrap ml-4">
                    {phase.timeline}
                  </span>
                </div>

                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#3b2e42] text-[28px] leading-[1.4] mb-6">
                  {phase.description}
                </p>

                <div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#3b2e42] text-[24px] mb-3">
                    Key Deliverables:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {phase.deliverables.map((deliverable, i) => (
                      <span
                        key={i}
                        className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#fdfc60] text-[20px] bg-[#f464b2] px-5 py-2 rounded-full"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
