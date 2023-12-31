import Logo from "./logo";
import { Button } from "./ui/button";
import Container from "./container";
import { TbBellSchool } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { Badge } from "./ui/badge";
import { NavigationMenuDemo } from "./nav-items";
import {
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import NavUser from "./nav-user";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background shadow-sm">
      <Container className="m-0 flex min-h-fit justify-between">
        <div className="flex items-center gap-5">
          <Logo />
          <NavigationMenuDemo />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden space-x-3 lg:flex">
            <BiSearch size={15} />
            <h3 className="font-semibold">Search products...</h3>
            <Badge variant="secondary" className="rounded-sm">
              Ctrl K
            </Badge>
          </Button>

          <Button size="icon" variant="outline" className="flex lg:hidden">
            <BiSearch size={20} />
          </Button>

          <Button size="icon" variant="outline">
            <TbBellSchool size={20} />
          </Button>
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <NavUser />
          </SignedIn>
          <ClerkLoading>
            <Loader2 size={20} className="animate-spin" />
          </ClerkLoading>
        </div>
      </Container>
    </nav>
  );
}
