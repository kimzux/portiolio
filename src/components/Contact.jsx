import React from 'react'
import { FaGithub, FaLinkedin , FaTwitter} from 'react-icons/fa';

function Contact() {
    return (
        <div name="contact" className='flex bg-smoke'>
            <footer class="container mx-auto max-w-7xl pt-12 pb-8 px-4 text-gray-300 lg:pt-16 md:px-10 lg-pt-20 xl:px-10 lg-pt-20 2xl:px-10 lg-pt-20">
                <div class="flex flex-col-reverse items-start justify-between space-y-reverse space-y-12 mb-10 sm:flex-row sm:space-y-0 xl:flex-row 2xl:flex-row md:flex-row">
                    <div>
                        <h4 class="mb-4 text-2xl font-bold uppercase">Zulfa Rajabu</h4>
                        <p class="max-w-lg">A Frontend Developer focused on building the frontend  websites  that leads to the success of the overall product</p>
                    </div>
                    <div class="flex flex-col items-start md:items-center xl:items-center 2xl:items-center">
                        <h4 class="mb-4 text-2xl font-bold uppercase">Social Media</h4>
                        <div class="flex space-x-4">
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/zulfa-rajabu-9420461a4/" class="inline-block transition-all hover:scale-110"><FaLinkedin size={25}/></a>
                            <a rel="noreferrer" target="_blank" href="flex-row sm:space-y-0" class="inline-block transition-all hover:scale-110"> <FaGithub size={25}/></a>
                            <a rel="noreferrer" target="_blank" href="https://twitter.com/" class="inline-block transition-all hover:scale-110"><FaTwitter size={25}/></a>
                        </div>
                     </div>
                </div><hr />
            <div class="mt-8 text-center text-sm"><p>© Copyright 2023. Made by <span><a href="http://mfonpeter.netlify.app/" class="inlne-block font-bold underline">Zulfa Rajabu</a></span>
                 </p>
            </div>
            </footer>
        </div>
    )
}

export default Contact