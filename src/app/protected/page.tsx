import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const ProtectedRoute = async () => {
  const session = await getServerSession();

  if (!session || !session.user) redirect("/api/auth/signin");

  return (
    <div className="flex flex-col gap-12">
      <p className="text-3xl font-light text-accent-foreground/80">
        This Page Represents{" "}
        <span className="font-bold text-4xl text-accent-foreground">
          Protected Route
        </span>
      </p>
      <div className="w-1/2 rounded-lg bg-muted flex flex-col px-8 py-6 drop-shadow-sm">
        {session && (
          <p className="text-accent-foreground/50">
            You will only see this if you are <strong>authenticated</strong>.
            <br /> Otherwise, you will be <strong>redirected</strong> to the
            sign-in page.
            <br />
          </p>
        )}
      </div>
    </div>
  );
};

export default ProtectedRoute;
