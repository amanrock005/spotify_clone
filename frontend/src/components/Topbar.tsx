import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButton from "./SignInOAuthButton";

export default function Topbar() {
  const isAdmin = false;
  return (
    <div
      className="flex items-center justify-between p-4 sticky top-8 bg-zinc-900/50
     backdrop-blur-md z-10
    "
    >
      <div className="flex gap-2 items-center">Spotify</div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to="/admin">
            <LayoutDashboard className="size-4 mr-2" />
            Admin dashboard
          </Link>
        )}

        <SignedIn>
          <SignOutButton />
        </SignedIn>

        <SignedOut>
          <SignInOAuthButton />
        </SignedOut>
      </div>
    </div>
  );
}
