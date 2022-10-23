import {createContext, ReactNode, useContext, useState} from "react";

type MenuContextType = {
    isOpen: boolean;
    setIsOpen: (isOut: boolean) => void;
};

const menuContext = createContext<MenuContextType>({
    isOpen: false,
    setIsOpen: () => {
        false;
    },
});

type MenuProviderType = {
    children: ReactNode;
};

export function useMenu(): MenuContextType {
    return useContext(menuContext);
}

export default function MenuProvider(props: MenuProviderType) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <menuContext.Provider value={{isOpen, setIsOpen}}>
            {props.children}
        </menuContext.Provider>
    );
}