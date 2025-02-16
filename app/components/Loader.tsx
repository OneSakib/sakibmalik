'use client';
import { useEffect } from "react";
const Loader = () => {
    useEffect(() => {
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            preloader.remove();
        }

    }, [])
    return <div>
        <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        <div id="preloader"></div>
    </div>


}
export default Loader;