import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Welcome to PizzaHara! We are a group of five enthusiastic students from Rizal Technological University in the Philippines, united by our passion for both technology and pizza. Our team, driven by a love for creating innovative web solutions, decided to blend our interests and craft an online platform dedicated to the art of pizza-making and enjoyment.
          </p>
          <p>At PizzaHara, our goal is to bring you a delightful digital experience that matches the joy of biting into a perfect slice of pizza. Whether you’re here to explore new pizza recipes, find the best pizza places, or simply share our love for this delicious dish, we’ve got you covered.
</p>
          <p>Thank you for visiting our site, and we hope you enjoy your time with us as much as we enjoy bringing PizzaHara to life.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
          +63 2 8534 8267          </a>
        </div>
      </section>
    </>
  )
}
