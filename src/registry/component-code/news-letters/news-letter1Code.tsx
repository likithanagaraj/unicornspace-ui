export const NewsLetter1Code = '"use client";\r\n\r\nimport { useState } from "react";\r\nimport { Mail } from "lucide-react";\r\nimport { Button } from "@/components/ui/button";\r\nimport { Input } from "@/components/ui/input";\r\n\r\nexport default function NewsLetter1() {\r\n  const [email, setEmail] = useState("");\r\n  const [isSubscribed, setIsSubscribed] = useState(false);\r\n\r\n  const handleSubmit = (e: React.FormEvent) => {\r\n    e.preventDefault();\r\n    // Here you would typically send the email to your server\r\n    // console.log("Subscribing email:", email);\r\n    setIsSubscribed(true);\r\n  };\r\n\r\n  if (isSubscribed) {\r\n    return (\r\n      <div className="bg-zinc-900 text-white p-6 rounded-lg max-w-md">\r\n        <h2 className="text-3xl font-bold mb-4">Thanks for subscribing.</h2>\r\n        <p className="text-zinc-400">\r\n          I will send you an email any time I publish a new blog post, release a\r\n          new project, or have anything interesting to share that I think you would\r\n          want to hear about. You can unsubscribe at any time, no hard feelings.\r\n        </p>\r\n      </div>\r\n    );\r\n  }\r\n\r\n  return (\r\n    <div className="bg-zinc-900 text-white p-6 rounded-lg max-w-md">\r\n      <div className="flex items-center mb-4">\r\n        <Mail className="w-6 h-6 mr-2" />\r\n        <h2 className="text-xl font-bold">Stay up to date</h2>\r\n      </div>\r\n      <p className="text-zinc-400 mb-4">\r\n        Get notified when I publish something new, and unsubscribe at any time.\r\n      </p>\r\n      <form onSubmit={handleSubmit} className="flex gap-2">\r\n        <Input\r\n          type="email"\r\n          placeholder="as.@gmail.com"\r\n          value={email}\r\n          onChange={(e) => setEmail(e.target.value)}\r\n          required\r\n          className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"\r\n        />\r\n        <Button type="submit" variant="secondary">\r\n          Join\r\n        </Button>\r\n      </form>\r\n    </div>\r\n  );\r\n}\r\n';