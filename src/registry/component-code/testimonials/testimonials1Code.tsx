export const Testimonials1Code = 'import React from "react";\r\nimport { Card, CardContent } from "@/components/ui/card";\r\nimport Image from "next/image";\r\nimport { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";\r\n\r\ninterface Props {\r\n  data: {\r\n    description: string;\r\n    name: string;\r\n    subTitle: string;\r\n    image: string;\r\n  };\r\n}\r\n\r\nconst testimonialsData = [\r\n  {\r\n    description:\r\n      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",\r\n    name: "	Himani Godara",\r\n    subTitle: "3 days ago",\r\n    image:\r\n      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/b4da3e31-4b07-4f7d-8535-e7324cee1f3e._CR0,0,424,424_SX48_.jpg",\r\n  },\r\n  {\r\n    description:\r\n      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",\r\n    name: "Fabrizio Spanu",\r\n    subTitle: "1 day ago",\r\n    image:\r\n      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/f9f1e5c2-d849-410d-9b6e-459e8e264ccf._CR0,0,500,500_SX48_.jpg",\r\n  },\r\n  {\r\n    description:\r\n      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",\r\n    name: "AjishPG",\r\n    subTitle: "9 days ago",\r\n    image:\r\n      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/2208f3a2-eb43-4625-b28b-94d917a2fadc._CR0,0,375,375_UX460_.jpg",\r\n  },\r\n  {\r\n    description:\r\n      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",\r\n    name: "Abdul majeed",\r\n    subTitle: "13 days ago",\r\n    image:\r\n      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",\r\n  },\r\n];\r\n\r\nconst Testimonials1 = () => {\r\n  return (\r\n    <section className="">\r\n      <h3 className="text-brand-text2 font-semibold text-3xl text-center mb-8">\r\n        See what our customers{" "}\r\n        <span className="text-brand-primary ">\r\n          say!{" "}\r\n          <Image\r\n            src={"/svgs/chat-text.svg"}\r\n            width={30}\r\n            className="inline -mt-3"\r\n            height={30}\r\n            alt=""\r\n          />\r\n        </span>\r\n      </h3>\r\n      <div className=" flex flex-col md:flex-row gap-2">\r\n        {testimonialsData.map((testimonial, index) => (\r\n          <Testimonial key={index} data={testimonial} />\r\n        ))}\r\n      </div>\r\n    </section>\r\n  );\r\n};\r\n\r\nconst Testimonial = ({ data }: Props) => {\r\n  const { description, image, name, subTitle } = data;\r\n  return (\r\n    <Card className="bg-brand-bg/30 p-6">\r\n      <div className="flex items-center pb-2 gap-2">\r\n        <Avatar>\r\n          <AvatarImage src={image} />\r\n          <AvatarFallback>CN</AvatarFallback>\r\n        </Avatar>\r\n        <div>\r\n          <h5 className=" font-semibold">{name}</h5>\r\n          <p className="text-xs opacity-75">{subTitle}</p>\r\n        </div>\r\n      </div>\r\n      <CardContent className="p-0 mt-4">\r\n        <p className="text-sm">&ldquo;{description}&ldquo;</p>\r\n      </CardContent>\r\n    </Card>\r\n  );\r\n};\r\n\r\nexport default Testimonials1;\r\n';