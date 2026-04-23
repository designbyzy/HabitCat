export default function Prototype() {
  const features = [
    {
      title: 'Physical Tracking',
      description: 'Passive sensors detect your habits without requiring phone interaction',
      icon: '🎯'
    },
    {
      title: 'Cat Companion',
      description: 'Your digital cat grows happier as you build consistent habits',
      icon: '🐱'
    },
    {
      title: 'Visual Feedback',
      description: 'LED animations provide instant, delightful confirmation of tracked habits',
      icon: '✨'
    },
    {
      title: 'Nostalgic Design',
      description: 'Inspired by Tamagotchi and virtual pets for a fun, familiar experience',
      icon: '🎮'
    },
    {
      title: 'Privacy First',
      description: 'All data stored locally on your device, never shared or uploaded',
      icon: '🔒'
    },
    {
      title: 'Distraction-Free',
      description: 'No apps, no notifications, no screen time—just pure habit building',
      icon: '🌟'
    }
  ];

  return (
    <div className="bg-[#f464b2] relative min-h-screen px-[134px] py-[134px]" data-name="Prototype">
      <div className="relative">
        <div className="text-center mb-20">
          <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[0.95] text-[#fdfc60] text-[96px] tracking-[-3.84px] mb-6">
            Final Prototype
          </p>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[1.4] text-[#fdfc60] text-[36px] tracking-[-0.72px] max-w-[900px] mx-auto">
            A working prototype combining Arduino sensors, LED displays, and delightful interactions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#fdfc60] rounded-[20px] p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              style={{
                opacity: 0,
                animation: `popIn 0.5s ease-out ${index * 0.1}s forwards`
              }}
            >
              <div className="text-[64px] mb-4">{feature.icon}</div>
              <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#f464b2] text-[32px] leading-[1.2] mb-3 tracking-[-1.28px]">
                {feature.title}
              </h3>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#3b2e42] text-[20px] leading-[1.4]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="bg-[#c2f5ff] rounded-[20px] p-12">
          <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[#3b2e42] text-[48px] leading-[1.1] tracking-[-1.92px] mb-8">
            Technical Specifications
          </h3>

          <div className="grid grid-cols-2 gap-x-16 gap-y-6">
            <div>
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#f464b2] text-[24px] mb-2">
                Hardware
              </p>
              <ul className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#3b2e42] text-[20px] leading-[1.6] space-y-1">
                <li>• ESP32-S3 microcontroller</li>
                <li>• 2.06" AMOLED touchscreen (466×466)</li>
                <li>• Motion sensors (accelerometer & gyroscope)</li>
                <li>• Wi-Fi & Bluetooth connectivity</li>
                <li>• Rechargeable 500mAh battery</li>
              </ul>
            </div>

            <div>
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#f464b2] text-[24px] mb-2">
                Software
              </p>
              <ul className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#3b2e42] text-[20px] leading-[1.6] space-y-1">
                <li>• Custom Arduino firmware</li>
                <li>• Machine learning for habit detection</li>
                <li>• Animated cat sprite system</li>
                <li>• Local data encryption</li>
                <li>• Sleep mode optimization</li>
              </ul>
            </div>

            <div>
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#f464b2] text-[24px] mb-2">
                Dimensions
              </p>
              <ul className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#3b2e42] text-[20px] leading-[1.6] space-y-1">
                <li>• 120mm × 80mm × 25mm</li>
                <li>• Weight: 150g</li>
                <li>• Portable desk size</li>
              </ul>
            </div>

            <div>
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#f464b2] text-[24px] mb-2">
                Battery Life
              </p>
              <ul className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#3b2e42] text-[20px] leading-[1.6] space-y-1">
                <li>• Up to 7 days on single charge</li>
                <li>• USB-C fast charging</li>
                <li>• Power-saving sleep mode</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 mb-8">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#fdfc60] text-[48px] leading-[1.2] mb-8 tracking-[-0.96px]">
            Ready to build better habits?
          </p>
          <button className="bg-[#fdfc60] text-[#f464b2] font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[32px] px-16 py-6 rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300 tracking-[-1.28px] mb-16">
            Get Started with <span className="font-['Sabaling:Regular',sans-serif]">HabitCat</span>
          </button>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-[#fdfc60] border-opacity-30 pt-8 text-center">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#fdfc60] text-[20px] leading-[1.4] opacity-70">
            <span className="font-['Sabaling:Regular',sans-serif]">HabitCat</span> © 2026 — Making habit tracking fun, one paw at a time 🐾
          </p>
        </div>

        <style>{`
          @keyframes popIn {
            from {
              opacity: 0;
              transform: scale(0.8) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
