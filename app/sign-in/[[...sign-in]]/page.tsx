import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Section */}
      <main className="flex flex-1 justify-center items-center pt-20">
        <div className="w-full max-w-md p-4">
          <SignIn />
        </div>
      </main>
    </div>
  );
}
