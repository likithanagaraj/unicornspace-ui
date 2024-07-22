import { Mdx } from "@/components/mdx-component";
import { allComponents } from "contentlayer/generated";
import { notFound } from "next/navigation";

const getGuideFromParams = ({ params }: { params: { slug: string } }) => {
  console.log("✅⚡from getGuideFromParams");
  let slug = params.slug;
  slug = `/components/${slug.toString().split(",").join("/")}`;
  const component = allComponents.find((component) => component.slug === slug);
  if (!component) {
    return null;
  }
  return component;
};

const ComponentPage = ({ params }: any) => {
  const guide = getGuideFromParams({ params });
  if (!guide) {
    return notFound();
  }

  return (
    <div>
      {" "}
      <article className="mx-auto max-w-xl py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">{guide.title}</h1>
        </div>
        <Mdx code={guide.body.code} />
      </article>
    </div>
  );
};

export default ComponentPage;