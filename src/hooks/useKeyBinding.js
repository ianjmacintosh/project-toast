import React from 'react';

export default function useKeyBinding(key, callback) {
    const handleKeyPress = (event) => {
        if (event.key === key) callback()
    }

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyPress)

        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    })
}