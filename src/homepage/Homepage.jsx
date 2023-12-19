import Header from "../components/header/Header.jsx";
import Tasks from "../components/tasks/Tasks.jsx";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function Homepage() {
    return (
            <div className='flex flex-column align-items-center justify-content-start overflow-hidden gap-4 py-4 px-2 md:px-0'>
                <SignedIn>
                    <Header/>
                    <Tasks/>
                </SignedIn>

                <SignedOut>
                    <Header/>
                    <div className='w-full max-w-30rem card border-round-3xl h-25rem flex text-center align-items-center justify-content-center'>
                        <div className='flex flex-column gap-4 align-items-center justify-content-between'>
                            <p className='text-xl'>Welcome to <span className='font-bold'>Task Tracer</span>!</p>
                            <p>A simple, yet efficient to-do application designed to enhance productivity and task management.</p>
                            <p>To continue, please login!</p>
                        </div>
                    </div>
                </SignedOut>
            </div>
    )
}
