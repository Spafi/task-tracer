import { useEffect, useState } from "react";

export default function Header() {
    const [ currentDateTime, setCurrentDateTime ] = useState( '' );

    useEffect( () => {
        const intervalId = setInterval( () => {
            const now = new Date();

            const dateOptions = {
                weekday: 'long',
                year   : 'numeric',
                month  : 'long',
                day    : 'numeric',
            };

            const timeOptions = {
                hour  : '2-digit',
                minute: '2-digit',
                second: '2-digit',
            };

            const formattedDate = now.toLocaleDateString( 'en-US', dateOptions );
            const formattedTime = now.toLocaleTimeString( 'en-US', timeOptions );

            setCurrentDateTime( `${ formattedDate } ${ formattedTime }` );
        }, 1000 );

        return () => clearInterval( intervalId );
    }, [] );

    return (
            <div className='border-round-3xl w-full pl-4 pt-4 pb-4 max-w-30rem flex card'>
                <div className='header-content'>
                    <div className='text-6xl font-semibold'>To Do List</div>
                    <div className='text-sm'>
                        { currentDateTime }
                    </div>
                </div>

                <div></div>
            </div>
    )
}
