import logo from "../../assets/disney.png"
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiPlus, HiStar, HiTv } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
    const menu = [
        {
            name: "HOME",
            icon: HiHome

        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass

        },
        {
            name: "WATCH LIST",
            icon: HiPlus

        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className="flex justify-between  items-center p-5">
            <div className="flex gap-8 items-center">
                <img src={logo} alt="" className="w-[80px]  md:w-[115px] bg-black object-cover " />
                {/*responsive md  and lg device */}
                <div className="hidden md:flex gap-8">
                    {
                        menu.map((nav, index) => <HeaderItem itamName={nav.name} Icon={nav.icon} key={index} />

                            // <div key={index}>
                            //     {<nav.icon/>}
                            //     <p >{nav.name}</p>
                            // </div>
                        )}
                </div>
                {/* responsive navbar sm */}
                <div className="flex md:hidden gap-8">
                    {
                        menu.map((nav, index) => index < 3 && <HeaderItem itamName={""} Icon={nav.icon} key={index} />

                        )};
                    <div className="">
                        <HeaderItem itamName={""} Icon={HiDotsVertical} />
                        
                    </div>
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className="w-[40px] rounded-full" />
        </div>
    );
};

export default Header;