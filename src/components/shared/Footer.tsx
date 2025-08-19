const Footer = () => {
    return (
        <div className="w-full h-[50px] border-t border-gray-600">
            <div className="flex justify-between px-4 py-2 bg-gray-800 rounded-b-lg">
                <div className="">
                    <span className="text-gray-400 hover:text-gray-200 transition-all duration-300">Javascript/Typescript</span>
                </div>
                <div className="flex gap-[35px]">
                    <span className="text-gray-400 hover:text-gray-200 transition-all duration-300">UTF-8</span>
                    <span className="text-gray-400 hover:text-gray-200 transition-all duration-300">Line: 1 no errors</span>
                    <span className="text-gray-400 hover:text-gray-200 transition-all duration-300">Spaces: 2</span>
                    <span className="text-gray-400 hover:text-gray-200 transition-all duration-300">Git: main</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
