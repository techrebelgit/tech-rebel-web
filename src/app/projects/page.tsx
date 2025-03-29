import Navbar from "@/components/navbar"
import { Github, Globe, Twitter } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Trustless Work",
      description: "Permissionless Escrows for The New Economy.",
      category: "Payment Infra",
      status: "Active",
      image: "/placeholder.svg?height=300&width=600",
      links: [
        { type: "website", url: "https://trustlesswork.com", label: "Website" },
        { type: "github", url: "https://github.com/Trustless-Work", label: "GitHub" },
        { type: "twitter", url: "https://x.com/TrustlessWork", label: "Twitter" },
      ],
    },
    {
      title: "Kindfi",
      description: "Crowdsourcing for social impact projects",
      category: "Blockchain Aid",
      status: "Active",
      image: "/placeholder.svg?height=300&width=600",
      links: [
        { type: "website", url: "https://www.kindfi.org", label: "Website" },
        { type: "github", url: "https://github.com/kindfi-org", label: "GitHub" },
      ],
    },
  ]

  // Function to render the appropriate icon based on link type
  const getLinkIcon = (type: string) => {
    switch (type) {
      case "website":
        return <Globe className="h-5 w-5" />
      case "github":
        return <Github className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      default:
        return <Globe className="h-5 w-5" />
    }
  }

  return (
    <main className="min-h-screen bg-white text-rebel-black">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <h1 className="text-5xl font-bold mb-8">Our Projects</h1>
        <p className="text-xl max-w-3xl mb-12">
          At Tech Rebel, we&apos;re working on cutting-edge projects that push the boundaries of what&apos;s possible. Explore our
          current initiatives below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-rebel-gray shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-48 bg-rebel-red flex items-center justify-center">
                <span className="text-xl font-bold text-white">{project.title}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm bg-rebel-light px-3 py-1 rounded-full">{project.category}</span>
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      project.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : project.status === "In Development"
                          ? "bg-blue-100 text-blue-800"
                          : project.status === "Research"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-rebel-gray hover:bg-rebel-light transition-colors"
                    >
                      {getLinkIcon(link.type)}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

