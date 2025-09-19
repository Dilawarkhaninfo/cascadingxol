import OurStory from "@/components/about/OurStory"
import VisionMission from "@/components/about/VisionMission"
import CoreValues from "@/components/about/CoreValues"
import TeamSection from "@/components/about/TeamSection"

export default function About() {
    return (
        <div className="flex flex-col">
            {/* Our Story with Timeline and Milestones */}
            <OurStory />

            {/* Vision & Mission with Visual Cards */}
            <VisionMission />

            {/* Core Values with Professional Images */}
            <CoreValues />

            {/* Team Section with Detailed Profiles */}
            <TeamSection />
        </div>
    )
}