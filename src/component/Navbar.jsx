"use client";
import Image from "next/image";
import Link from "next/link";
import DropdownPage from "./DropdownPage";

const Navbar = () => {


    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">

                <div className="flex gap-2 items-center">

                    <div className="sm:flex  md:hidden ">
                        <DropdownPage />
                    </div>

                    <Image
                        src={"/logo.jpg"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto rounded-full"
                    />
                    <h3 className="font-black text-lg">Sunglass</h3>
                </div>


                <div className="sm:hidden  md:flex">
                    <ul className="flex items-center gap-5 text-sm ">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/products"}>Products</Link>
                        </li>
                        <li>
                            <Link href={"/profile"}>Profile</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-4">
                    <ul className="flex items-center gap-5  text-sm">
                        <li>
                            <Link href={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link href={"/register"}>Register</Link>
                        </li>
                    </ul>
                </div>



            </nav>
        </div>
    );
};

export default Navbar;