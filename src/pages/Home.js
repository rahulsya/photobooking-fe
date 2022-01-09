import { useEffect, useState } from "react";
import { Navbar, Footer } from "../components";
import { HeroSection, Photos, CategoryProducts } from "../parts";
import { category, getPhotos } from "../api/";

function Home() {
  const [categories, setCatories] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await category();
        const { categories } = data;
        setCatories(categories);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { photos },
        } = await getPhotos();
        setPhotos(photos);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-screen w-full">
        <div className="container mx-auto px-5 lg:px-16 ">
          <HeroSection />
          <div className="mt-12"></div>
          <Photos photos={photos} />
          <div className="mt-24"></div>
          <CategoryProducts categories={categories} />
        </div>
        <div className="mt-24"></div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
