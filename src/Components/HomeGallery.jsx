import ironman from "../assets/ìron_man2.webp"
import antman from "../assets/ant_man.webp"
import blackpanther from "../assets/black_panthe.webp"
import capamerica from "../assets/captain_america3.webp"
import daredevil from "../assets/dare_devil.webp"
import loki from "../assets/loki.webp"
import spiderman from "../assets/spider_man.webp"
import wolverine from "../assets/wolverine2.webp"
import { Link } from "react-router-dom"


const HomeGallery = () => {
    return (
        <>
            <h1 className="font-semibold text-center text-4xl text-primary my-12">Our Featured Products</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to=""><img className="border-red-200 border-2 rounded-md hover:shadow-md transition-all ease-in" src={ironman} alt="" /></Link>
                <Link to=""><img className="border-red-200 border-2 rounded-md hover:shadow-md transition-all ease-in" src={antman} alt="" /></Link>
                <Link to=""><img className="border-red-200 border-2 rounded-md hover:shadow-md transition-all ease-in" src={blackpanther} alt="" /></Link>
                <Link to=""><img className="border-red-200 border-2 rounded-md hover:shadow-md transition-all ease-in" src={capamerica} alt="" /></Link>
                <Link to=""><img className="border-red-200 border-2 rounded-md hover:shadow-md transition-all ease-in" src={daredevil} alt="" /></Link>
                <Link to=""><img className="border-red-200 border-2 rounded-md hover:shadow-md transition-all ease-in" src={loki} alt="" /></Link>
                <Link to=""><img className="border-red-200 border-2 rounded-md hover:shadow-md transition-all ease-in" src={spiderman} alt="" /></Link>
                <Link to=""><img className="border-red-200 border-2 rounded-md hover:shadow-md transition-all ease-in" src={wolverine} alt="" /></Link>




            </div>
        </>
    );
};

export default HomeGallery;