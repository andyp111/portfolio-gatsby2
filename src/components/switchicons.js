import React, { useState } from 'react';
import { RiLightbulbLine, RiMoonCloudyLine } from 'react-icons/ri';

const SwitchIcons = (props) => {
    const handleDarkClick = () => props.onClick && props.onClick('dark');
    const handleLightClick = () => props.onClick && props.onClick('light');
    const windowGlobal = typeof window !== 'undefined' && window;
    let storage = windowGlobal.localStorage;
    const [isDarkMode, handleDarkMode] = useState(storage);

    const lightOrCloud = eval(isDarkMode)
        ? <RiLightbulbLine onClick={() => { handleDarkMode(false); handleLightClick() }} />
        : <RiMoonCloudyLine onClick={() => { handleDarkMode(true); handleDarkClick() }} />

    return (
        <div>
            {lightOrCloud}
        </div>
    )
}

export default SwitchIcons;