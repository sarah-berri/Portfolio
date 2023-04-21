import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ProjectsItems = ({ backgroundImg, projectUrl, tech }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full group shadow-xl p-4 rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-fuchsia-500/40 cursor-crosshair'>
            <Image src={backgroundImg} className='rounded-lg group-hover:opacity-10' alt="Background image" />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                <Link href={projectUrl}>
                    <button className='w-full text-center rounded-lg px-4 py-3 m-2'>
                        Plus d&#39;infos
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectsItems;
