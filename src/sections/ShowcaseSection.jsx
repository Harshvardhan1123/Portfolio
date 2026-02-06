import React, {useRef} from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(()=>{
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card,index)=>{
        gsap.fromTo(
            card,
            {y: 50, opacity:0},
            {y:0,
                opacity:1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger:{
                trigger: card,
                    start: 'top bottom-=100',
                }
            }
        )
    })


        gsap.fromTo(
            sectionRef.current,
            {opacity: 0 },
            {opacity: 1, duration: 1.5},
        )
    },[]);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*left*/}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="TuneSphere" />
                        </div>
                        <div className="text-content">
                            <h2>TuneSphere, An Ad-free music app , with full independent Database and  user-friendly UI</h2>
                            <p className="text-white-50 md:text-xl">
                                A website build with react native, tailwindcss, MySQL, Postman .
                            </p>
                        </div>
                    </div>
                    {/*right*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library Management platform" />
                            </div>
                            <h2> TravelTrove, A Travel Booking and place browsing website</h2>
                        </div>

                        <div className="project" ref = {project3Ref}>
                            <div className="image-wrapper bg-[#ffe7db]">
                                <img src="/images/project3.png" alt="Yc directory" />
                            </div>
                            <h2>SunitaDresses , A salse website for Mrs.Sunita @Lucknow</h2>
                            <button type="button">
                                <div className="cta-button group">
                                    <div className="bg-white-50" />
                                    <a href ="https://sunita-dresses.vercel.app/">Visit</a>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
