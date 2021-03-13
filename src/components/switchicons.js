import React, { useState } from 'react';
import { RiLightbulbLine, RiMoonCloudyLine } from 'react-icons/ri';

const SwitchIcons = (props) => {
    const handleDarkClick = () => props.onClick && props.onClick('dark');
    const handleLightClick = () => props.onClick && props.onClick('light');
    const windowGlobal = typeof window !== 'undefined' && window;
    let storage = windowGlobal.localStorage;
    let darkModeStorage;
    if (storage) darkModeStorage = Boolean(storage.darkMode);
    
    console.log(darkModeStorage);
    const [isDarkMode, handleDarkMode] = useState(darkModeStorage || false);

    const lightOrCloud = (isDarkMode)
        ? <RiLightbulbLine onClick={() => { handleDarkMode(!isDarkMode); handleLightClick() }} />
        : <RiMoonCloudyLine onClick={() => { handleDarkMode(!isDarkMode); handleDarkClick() }} />

    return (
        <div>
            {lightOrCloud}
        </div>
    )
}

export default SwitchIcons;