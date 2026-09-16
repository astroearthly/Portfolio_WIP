import type { Project } from "@/data/projects";
import Shell_1 from "@/assets/SSD/Shell_1.webp";
import SSD_S5_A from "@/assets/SSD/SSD_S5_A.webp";
import SSD_S5_B from "@/assets/SSD/SSD_S5_B.webp";
import SSD_S5_C from "@/assets/SSD/SSD_S5_C.webp";
import SSD_S5_D from "@/assets/SSD/SSD_S5_D.webp";
import SSD_S5_E from "@/assets/SSD/SSD_S5_E.webp";
import SSD_S5_F from "@/assets/SSD/SSD_S5_F.webp";
import SSD_S5_G from "@/assets/SSD/SSD_S5_G.webp";
import SSD_S5_H from "@/assets/SSD/SSD_S5_H.webp";
import SSD_S6_A from "@/assets/SSD/SSD_S6_A.webp";
import Xray_Human from "@/assets/SSD/Xray_Human.webp";

export function SSD({ project }: { project: Project }) {
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
              To move beyond the mechanical language of conventional product presentation while preserving the precision and restraint inherent to Vanta's industrial design. The challenge was to translate abstract ideas surrounding the product into tangible visual experiences, creating an emotional connection without forcing emotion onto the object or relying on superficial complexity                </p>
              </div>

              {/* Point 3: Methodology */}
              <div className="flex flex-col gap-2 pb-8 border-b-2 border-border">
                <span className="label" style={{ color: "#f5f5f5" }}>Methodology</span>
                <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
                We began by identifying the ideas embedded within Vanta — speed, portability, movement, freedom, and creativity — and explored how each could be expressed through image, motion, scale, light, and atmosphere. Precise studies of the product were combined with more abstract and human references, creating a visual language that moves between the physical object and the experiences it enables.                </p>
              </div>

              {/* Point 4: Solution */}
              <div className="flex flex-col gap-2 pb-8 border-b-2 border-border">
                <span className="label" style={{ color: "#f5f5f5" }}>Solution</span>
                <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
                The resulting film presents Vanta through a series of contrasting perspectives, shifting between precision and abstraction, stillness and movement, intimacy and scale. A restrained neutral palette, sculptural lighting, kinetic editing, and carefully controlled composition allow the product to remain visually precise while becoming part of a broader narrative about movement, creativity, freedom, and everyday life.                </p>
              </div>

              {/* Point 5: Scope */}
              <div className="flex flex-col gap-2">
                <span className="label" style={{ color: "#f5f5f5" }}>Scope</span>
                <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
                The entire film was created in CGI from a single physically accurate Vanta asset, with all environments, lighting, animation, effects, and compositing developed digitally. The modular approach allows the visual system to be adapted across formats and markets while maintaining a consistent cinematic identity.                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Scrolling Renders + Bottom 2-Column Grid */}
          <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col gap-1">
            
            <div className="media-frame aspect-[16/9]">
              <img src={Shell_1} alt="Industrial product macro texture" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={SSD_S5_G} alt="Industrial product macro texture" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={SSD_S5_C} alt="Industrial product macro texture" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={SSD_S5_H} alt="Industrial product macro texture" className="h-full w-full object-contain" loading="lazy" />
            </div>

            {/* TWO-SPLIT COLUMN WITH 16:9 RATIO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 pt-0">
              <div className="media-frame aspect-[16/9]">
                <img src={SSD_S5_B} alt="Industrial product variant A" className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div className="media-frame aspect-[16/9]">
                <img src={SSD_S5_E} alt="Industrial product variant B" className="h-full w-full object-contain" loading="lazy" />
              </div>
            </div>

            {/* ADDITIONAL FULL-WIDTH 16:9 FRAME */}
            <div className="media-frame aspect-[16/9]">
              <img src={SSD_S5_F} alt="Industrial product final macro render" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={SSD_S5_D} alt="Industrial product final macro render" className="h-full w-full object-contain" loading="lazy" />
            </div>

            <div className="media-frame aspect-[16/9]">
              <img src={SSD_S6_A} alt="Industrial product final macro render" className="h-full w-full object-contain" loading="lazy" />
            </div>

          </div>

        </div>
      </section>

      {/* SEPARATE SECOND SPLIT SECTION: Unsplash image on left, Note on right */}
      <section className="shell pb-24 md:pb-36">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column (35%): Unsplash Image without text underneath */}
          <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col">
            <div className="media-frame aspect-[16/12]">
              <img src={Xray_Human} alt="Industrial product final macro render" className="h-full w-full object-contain" loading="lazy" />
            </div>
          </div>

          {/* Right Column (65%): Note positioned horizontally aligned on the right */}
          <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col gap-2">
            <span className="label" style={{ color: "#f5f5f5" }}>Note</span>
            <p className="text-xs md:text-sm" style={{ lineHeight: "25px", color: "#888888" }}>
              A study in internal mechanics. The objects we carry and build are ultimately just extensions of how we process, store, and recall our daily lives.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}