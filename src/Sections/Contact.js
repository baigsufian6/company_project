import React,{useEffect} from "react";
import { client } from '../Plots/export'
import { useDarkMode } from "../Plots/DarkModeContext";
import { FaStar } from 'react-icons/fa';
import AOS from 'aos'
// import 'aos/dist/os.css'

const Contact = ()=>{
    useEffect(()=>{
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay:100
        })
    },[])

    const { darkMode,toggleDarkMode } = useDarkMode();

    return(
        <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
            <section id='contact' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'}
            lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2
             grid-cols-1 justify-center items-center lg:px-36  px-6 py-20 gap-10`}>
                <div data-aos='zoom-in' className='bg-white dark:bg-black p-10 flex flex-col
                justify-center items-start gap-4 rounded-xl'>
                    <h1 className='text-2xl text-black font-semibold dark:text-white'> Send  a message today</h1>
                    <input type="text" placeholder='Enter your FullName here' className='w-full px-6 py-3 border-2 border-gray-200
                    rounded-xl'></input>
                    <input type="text" placeholder='Enter your Valid Email' className='w-full px-6 py-3 border-2 border-gray-200
                    rounded-xl'></input>
                    <input type="text" placeholder='Enter your valid Phone Number here' className='w-full px-6 py-3 border-2 border-gray-200
                    rounded-xl'></input>
                    <textarea name='' id='' cols='30' rows='5' placeholder="Enter your message here.." className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'/>
                    <button className='bg-red-600 w-full text-md px-8 py-3 text-white font-semibold
                    rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
                </div>

                <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
                    <h1 data-aos='zoom-in' data-aos-delay='200' className='text-red-500 dark:text-white'>REACH US</h1>

                    <h1 data-aos='zoom-in' data-aos-delay='400' className='text-black text-[40px] font-semibold 
                    leading-10 dark:text-white'>"Feel free to reach out to Rohan Infra via email at info@rohaninfra.com for any questions or project details."</h1>
                   <p data-aos='zoom-in' data-aos-delay='600' className='text-xl text-gray-600 text-justify
                   dark:text-white'>The best way to predict your future is to create it." — Abraham Lincoln
"Happiness is not something ready-made. It comes from your own actions." — Dalai Lama
"Life isn't about waiting for the storm to pass, but about learning to dance in the rain." — Vivian Greene
"The only limit to our realization of tomorrow is our doubts of today." — Franklin D. Roosevelt
</p>
                    <button className='bg-red-600  text-md px-8 py-3 text-white font-semibold
                    rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
                 </div>
             </section>
        </div>
    )
}

export default Contact;