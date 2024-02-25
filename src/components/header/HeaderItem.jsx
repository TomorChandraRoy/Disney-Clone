/* eslint-disable react/prop-types */

const HeaderItem = ({itamName,Icon}) => {
    
    return (
        <div className="flex items-center text-lg font-semibold gap-5 cursor-pointer hover:underline underline-offset-8">
            <Icon/>
           <h2 className=" hidden md:block">{itamName}</h2>
        </div>
    );
};

export default HeaderItem;