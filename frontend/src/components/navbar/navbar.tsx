import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-2 bg-background ">
      <div className="flex flex-row items-center justify-center gap-4 " >
        <p>Dashboard</p>
        <p>Income</p>
        <p>Expense</p>
        <p>Saving</p>
      </div>
      <div className="flex items-center gap-5 ">
        <Input className="focus:outline-none" type="text" placeholder="search.." />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
