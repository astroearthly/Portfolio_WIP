import type { Project } from "@/data/projects";
import S2_C from "@/assets/Air-Sensor/S2_C.webp";
import S4_H from "@/assets/Air-Sensor/S4_H.webp";
import S4_D from "@/assets/Air-Sensor/S4_D.webp";
import S4_C from "@/assets/Air-Sensor/S4_C.webp";
import S4_G from "@/assets/Air-Sensor/S4_G.webp";
import S2_D from "@/assets/Air-Sensor/S2_D.webp";
import S3_B from "@/assets/Air-Sensor/S3_B.webp";
import S3_A from "@/assets/Air-Sensor/S3_A.webp";
import S4_F from "@/assets/Air-Sensor/S4_F.webp";
import SSD_S6_A from "@/assets/SSD/SSD_S6_A.webp";
import Xray_Human from "@/assets/SSD/Xray_Human.webp";

export function AirSensor({ project }: { project: Project }) {
  return (
    <>
      {/* HYBRID ASYMMETRIC CONTENT SECTION */}
      <section className="shell py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-24 relative">
          
          {/* LEFT COLUMN: Sticky Narrative / 5 Points Covered Fully */}
          <div className="w-full md:w-[40%] lg:w-[35%] md:sticky md:top-32 flex flex-col gap-8">
            <div className="flex flex-col gap-8">  
              {/* Point 1: Overview */}
              <div className="flex flex-col gap-2 pb-8 border-b-2 border-border">
                <span className="label" style={{ color: "#f5f5f5" }}>Overview</span>
                <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
                  {project.description}
                </p>
              </div>

              {/* Point 2: Challenge */}
              <div className="flex flex-col gap-2 pb-8 border-b-2 border-border">
                <span className="label" style={{ color: "#f5f5f5" }}>Challenge</span>
                <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
                  The challenge was to communicate technical intelligence without making the product feel clinical or mechanical. The sensor measures something we cannot see, requiring a visual approach that could give physical presence to the invisible while preserving the simplicity and precision of its industrial design.
                </p>
              </div>

              {/* Point 3: Methodology */}
              <div className="flex flex-col gap-2 pb-8 border-b-2 border-border">
                <span className="label" style={{ color: "#f5f5f5" }}>Methodology</span>
                <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
                  The visual language was built around the relationship between the visible and invisible. Hyper-real materials, controlled lighting and precise camera choreography establish the physical credibility of the product, while atmospheric movement, particle behaviour and abstract spatial transitions give form to the air surrounding it. Every visual element was deliberately restrained so that atmosphere could enhance the object without overwhelming it.                </p>
              </div>

              {/* Point 4: Solution */}
              <div className="flex flex-col gap-2 pb-8 border-b-2 border-border">
                <span className="label" style={{ color: "#f5f5f5" }}>Solution</span>
                <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
                  The resulting film positions the sensor as a quiet connection between technology and everyday life. A restrained neutral palette, deep shadow and controlled movement create a sense of calm and precision, while the surrounding atmosphere gives the product an emotional context. Rather than presenting the sensor as an isolated piece of hardware, the film presents it as an object that observes and interacts with the environment we live in.
                </p>
              </div>

              {/* Point 5: Scope */}
              <div className="flex flex-col gap-2">
                <span className="label" style={{ color: "#f5f5f5" }}>Scope</span>
                <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
                  Creative direction, visual development, 3D modeling, look development, procedural simulation, technical animation, lighting, cinematic rendering and compositing.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Renders + Bottom 2-Column Grid */}
          <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col gap-1">
            
            <div className="media-frame aspect-[16/9]">
              <img src={S2_C} alt="Industrial product macro texture" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={S3_A} alt="Industrial product macro texture" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={S4_C} alt="Industrial product macro texture" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={S4_F} alt="Industrial product macro texture" className="h-full w-full object-contain" loading="lazy" />
            </div>

            {/* TWO-SPLIT COLUMN WITH 16:9 RATIO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 pt-0">
              <div className="media-frame aspect-[16/9]">
                <img src={S4_D} alt="Industrial product variant A" className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="media-frame aspect-[16/9]">
                <img src={S2_D} alt="Industrial product variant B" className="h-full w-full object-contain" loading="lazy" />
              </div>
            </div>

            {/* ADDITIONAL FULL-WIDTH 16:9 FRAME */}
            <div className="media-frame aspect-[16/9]">
              <img src={S3_B} alt="Industrial product final macro render" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={S4_G} alt="Industrial product final macro render" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={S4_H} alt="Industrial product final macro render" className="h-full w-full object-contain" loading="lazy" />
            </div>

          </div>

        </div>
      </section>

      
    </>
  );
}