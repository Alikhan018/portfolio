import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ListProps {
    list: Record<string, any>;
}

const List = ({ list }: ListProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-[15px] p-3">
            {Object.entries(list).map(([name, icon]) => (
                <FontAwesomeIcon
                    key={name}
                    icon={icon}
                    className="text-2xl text-gray-300 hover:text-gray-100 cursor-pointer transition-all duration-300"
                />
            ))}
        </div>
    )
}

export default List;
