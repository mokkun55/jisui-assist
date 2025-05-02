import { BaseLayout } from "~/components/layouts/baseLayout";

export default function Home() {
  return (
    <div>
      <BaseLayout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p className="text-lg">
          This is a sample Next.js app with Tailwind CSS.
        </p>
        <p className="text-lg">You can start building your app from here.</p>
        <p className="text-lg">Happy coding!</p>
      </BaseLayout>
    </div>
  );
}
