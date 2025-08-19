const Header = () => {
    return (
        <div className="w-full border-b border-gray-600">
            <div className=" p-4 bg-gray-800 rounded-t-lg">
                <div className="flex gap-[8px]">
                    <div className="rounded-lg border-red-500 border-8 h-4 w-4 cursor-pointer"></div>
                    <div className="rounded-lg border-yellow-500 border-8 h-4 w-4 cursor-pointer"></div>
                    <div className="rounded-lg border-green-500 border-8 h-4 w-4 cursor-pointer"></div>
                </div>
            </div>
        </div>
    )
}

export default Header;
