import React from 'react'


const About = () => {
    return (
        <div name="about" className='w-full h-full bg-smoke pt-16 pb-16 lg:pt-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8 xl:px-2 mb-8 text-center lg:mb-16'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple '>About Me</p> <br /><br />
                    <p className="xl:max-w-2xl px-4 mx-auto text-lg text-gray-800 sm:px-10 md:text-xl md:max-w-3xl md:px-0">Here you will find more information about me, what i do and my current skills interms of programming and technology</p>
                </div>
                <div className='container mx-auto max-w-7xl flex flex-col space-y-12 px-4 sm:px-10 lg:flex-row lg:space-y-0 lg:space-x-16 xl:flex-row xl:space-y-0 xl:space-x-16 2xl:flex-row 2lx:space-y-0 2lx:space-x-16'>
                    <div className='w-full'>
                        <p className='font-bold text-xl mt-0'>Get to know me!</p><br />
                        <div className='flex flex-col items-center space-y-4 mb-8 text-lg text-gray-800 lg:mb-10'>
                            <p className='text-6 text-justify '>I'm a Frontend Web Developer with a passion for building up beautiful and responsive websites.
                                I have worked on a few projects that demonstrates my ability
                                to make use of the concepts I've learned.
                                You can check them out in the Projects section.</p>
                            <br />
                            
                            <p className='text-6 text-justify '>I enjoy sharing and interacting with people in the Web Dev world. I believe that this helps me to grow and learn in this field.
                                You can connect with me on <a href="https://www.linkedin.com/in/zulfa-rajabu-9420461a4/" className='text-purple font-bold'>Linkedin</a> where I share my experiences and thoughts on various topics related to Web Development.</p>
                        </div>
                        <a href="mailto:kimzux0718@gmail.com" class="relative inline-block px-12 py-3 bg-gradient-to-r mt-8 from-purple to-pincolor-600 text-xl text-white font-bold rounded-md shadow-lg outline-none transition-all duration-200 after:inline-block after:w-full after:h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-purple after:to-pincolor-700 after:rounded-full after:-z-10 after:duration-500 hover:from-purple hover:to-pincolor-700 hover:-translate-y-[3px] hover:shadow-2xl hover:after:scale-x-[1.4] hover:after:scale-y-[1.6] hover:after:opacity-0 focus:-translate-y-[1px] focus:animate-pulsate lg:px-16 lg:py-4">Contact</a>
                    </div>
                    <div class="w-full xl:ml-8 2xl:ml-8 lg:ml-8">
                        <h3 class="mb-6 text-lg font-bold mt-0 xl:mt-0 2xl:mt-0 lg:mt-0 ">My Skills</h3>
                        <div class="flex flex-col space-y-4">
                            <div class="flex space-x-4">
                                <div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded">
                                    <span>HTML</span>
                                </div>
                                <div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded">
                                    <span>CSS</span>
                                </div>
                                <div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded"><span>php</span>
                                </div>
                                <div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded"><span>laravel</span>
                                </div>
                            </div>
                            <div class="flex space-x-4">
                                <div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded">
                                    <span>JavaScript</span>
                                </div><div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded">
                                    <span>React</span>
                                </div>
                                <div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded"><span>Git</span>
                                </div>
                                <div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded">
                                    <span>GitHub</span></div></div><div class="flex space-x-4"><div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded">
                                        <span>Tailwind CSS</span>
                                    </div>
                                <div class="flex items-center justify-center w-full px-3 py-3 bg-zinc-200 text-gray-800 font-semibold rounded">
                                    <span>Responsive Design</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default About