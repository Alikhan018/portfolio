import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div className="w-full border-b border-gray-600">
            <div className="flex p-4 bg-gray-800 rounded-t-lg justify-between">
                <div className="flex gap-[8px]">
                    <div className="rounded-lg border-red-500 border-8 h-4 w-4 cursor-pointer"></div>
                    <div className="rounded-lg border-yellow-500 border-8 h-4 w-4 cursor-pointer"></div>
                    <div className="rounded-lg border-green-500 border-8 h-4 w-4 cursor-pointer"></div>
                </div>
                <div>
                    <span className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">Ali's Portfolio</span>
                </div>
                <div className="flex gap-[8px]">
                    <FontAwesomeIcon onClick={() => {
                        window.open("https://github.com/Alikhan018", "_blank");
                    }} icon={faCodeBranch} className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300" />
                    <FontAwesomeIcon onClick={() => {
                        window.open("https://www.linkedin.com/in/alykhan72", "_blank");
                    }} icon={faLinkedin} className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300" />
                    <FontAwesomeIcon onClick={() => {
                        window.open("https://www.instagram.com/alykhan._", "_blank");
                    }} icon={faInstagram} className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300" />
                </div>
            </div>
        </div>
    )
}

export default Header;
