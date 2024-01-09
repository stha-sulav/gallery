import { Link } from "react-router-dom";
import Container from "./ui/container";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  return (
    <header className="bg-slate-500 text-white">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 w-full">
          <div className="flex items-center">
            <Link to={"/"}>
              <h1 className="text-xl font-bold">Gallery</h1>
            </Link>
          </div>
          <div className=" flex items-center">
            <ProfileButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
