import { useEffect, useRef } from "react";
import { BRANDS, SOCIAL_PROOF_VIDEO_URL } from "@/data/social-proof";

const SocialProofSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frame: number;

    const animate = () => {
      const duration = video.duration > 0 ? video.duration : 1;
      const fadeDuration = 0.5;
      const current = video.currentTime;

      if (current <= fadeDuration) {
        video.style.opacity = `${current / fadeDuration}`;
      } else if (duration - current <= fadeDuration) {
        video.style.opacity = `${(duration - current) / fadeDuration}`;
      } else {
        video.style.opacity = "1";
      }

      frame = requestAnimationFrame(animate);
    };

    video.play();
    frame = requestAnimationFrame(animate);

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-200"
        autoPlay
        muted
        playsInline
        src={SOCIAL_PROOF_VIDEO_URL}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative z-10 flex flex-col items-center gap-20 pt-16 pb-24 px-4">
        <div className="h-40 w-full" />
        <div className="flex w-full max-w-5xl items-center justify-between gap-6">
          <p className="text-sm text-foreground/50">
            Relied on by brands
            <br />
            across the globe
          </p>
          <div className="flex items-center gap-10">
            <div className="overflow-hidden">
              <div className="flex animate-marquee gap-16">
                {[...BRANDS, ...BRANDS].map((brand, index) => (
                  <div key={`${brand}-${index}`} className="flex items-center gap-3">
                    <div className="liquid-glass h-12 w-12 rounded-lg flex items-center justify-center text-base font-semibold text-foreground">
                      {brand.charAt(0)}
                    </div>
                    <span className="text-base font-semibold text-foreground">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
