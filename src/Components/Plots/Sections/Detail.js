import { React,useEffect } from 'react';
import {Header} from '../Header'
import Footer from '../Footer';
import { useDarkMode } from "../DarkModeContext";
import AOS from 'aos'
import 'aos/dist/aos.css'

const DetailPage = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <section className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full mx-auto lg:px-40 px-10 py-20 bg-white dark:bg-black text-gray-800 dark:text-white`}>
        {/* Introduction Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-5 text-red-600 dark:text-red-500">
            Welcome to Rohan Infra
          </h1>
          <p className="text-xl leading-relaxed">
            At Rohan Infra, we believe that building homes is not just about constructing structures; it’s about creating environments where memories are made, lives are enriched, and communities thrive. With a legacy of excellence spanning over <span className="font-bold">8 years</span>, we have been at the forefront of the real estate industry, crafting spaces that reflect our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-5 text-red-600 dark:text-red-500">
            Our Story
          </h2>
          <p className="text-xl leading-relaxed">
            Founded in <span className="font-bold">2017</span>, Rohan Infra began with a vision to transform the landscape of real estate by offering world-class properties that cater to the needs of modern families. Our journey started with a small team of dedicated professionals passionate about redefining the concept of urban living. Over the years, we have grown into a reputable name in the industry, known for our integrity, transparency, and unwavering focus on customer-centricity.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-5 text-red-600 dark:text-red-500">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed">
            Our mission is simple: to build dream homes that stand the test of time. We strive to provide our clients with a seamless experience from start to finish, ensuring that every aspect of their journey with us is marked by professionalism, dedication, and care. We aim to create spaces that not only meet the highest standards of quality but also enhance the lives of those who inhabit them.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-5 text-red-600 dark:text-red-500">
            Our Vision
          </h2>
          <p className="text-xl leading-relaxed">
            At Rohan Infra, our vision is to become the most trusted real estate brand in the region, known for our innovative designs, sustainable practices, and commitment to excellence. We envision a future where every home we build contributes positively to the environment and the community, offering our clients a perfect blend of luxury, comfort, and sustainability.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-5 text-red-600 dark:text-red-500">
            Our Values
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Integrity:</span> We believe in doing the right thing, always. Integrity is at the core of everything we do, ensuring that we build lasting relationships based on trust and transparency.
            </li>
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Quality:</span> We are committed to delivering the highest standards of quality in every project. From selecting the finest materials to employing the best craftsmanship, we leave no stone unturned to ensure perfection.
            </li>
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Innovation:</span> We continuously seek new ways to innovate and improve, embracing cutting-edge technology and contemporary designs to provide our clients with homes that are both beautiful and functional.
            </li>
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Customer-Centricity:</span> Our clients are at the heart of everything we do. We listen to their needs, understand their desires, and go above and beyond to exceed their expectations.
            </li>
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Sustainability:</span> We are dedicated to building a better future by incorporating sustainable practices in our projects. We aim to create environmentally friendly spaces that reduce our carbon footprint and promote a healthier lifestyle.
            </li>
          </ul>
        </div>

        {/* Our Expertise Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-5 text-red-600 dark:text-red-500">
            Our Expertise
          </h2>
          <p className="text-xl leading-relaxed">
            With a portfolio that includes a diverse range of residential and commercial projects, Rohan Infra has established itself as a leader in the real estate industry. Our expertise spans across various segments, including luxury apartments, villas, commercial spaces, and integrated townships. We pride ourselves on our ability to deliver projects on time and within budget, without compromising on quality or design.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-5 text-red-600 dark:text-red-500">
            Why Choose Rohan Infra?
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Proven Track Record:</span> With <span className="font-bold">22+</span> projects completed successfully, we have a proven track record of delivering on our promises.
            </li>
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Expert Team:</span> Our team of experienced architects, engineers, and project managers work tirelessly to bring your vision to life, ensuring every detail is perfect.
            </li>
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Customer Satisfaction:</span> We prioritize our clients' needs and strive to provide an exceptional customer experience at every stage of the journey.
            </li>
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Innovative Designs:</span> Our projects are designed with the latest trends and technologies in mind, ensuring a perfect blend of style, functionality, and sustainability.
            </li>
            <li className="text-xl leading-relaxed">
              <span className="font-bold">Transparent Processes:</span> We maintain complete transparency in all our dealings, keeping you informed and involved at every step.
            </li>
          </ul>
        </div>

        {/* Conclusion Section */}
        <div>
          <h2 className="text-3xl font-bold mb-5 text-red-600 dark:text-red-500">
            Join Us on Our Journey
          </h2>
          <p className="text-xl leading-relaxed">
            We invite you to explore the world of Rohan Infra, where your dreams of owning a perfect home come to life. Whether you're looking for a modern apartment, a spacious villa, or a commercial space that meets your business needs, we have something for everyone. Join us on our journey to build a brighter, better future—one home at a time.
          </p>
          <p className="text-xl leading-relaxed mt-5">
            <span className="font-bold">Contact Us</span> today to learn more about our projects and how we can help you find your dream property.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DetailPage;
