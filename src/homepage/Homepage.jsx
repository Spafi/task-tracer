import Header from "../components/header/Header.jsx";
import Search from "../components/search/Search.jsx";
import Tasks from "../components/tasks/Tasks.jsx";

export default function Homepage() {
    return (
            <div className='flex flex-column align-items-center justify-content-start overflow-hidden gap-4 py-4 px-2 md:px-0'>
                <Header/>
                <Search/>
                <Tasks/>
            </div>
    )
}
