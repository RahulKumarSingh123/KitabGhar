import TestimonialCard from "./TestimonialCard"
import Slider from "react-slick"

let Testimonial = [
    {
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/07/845751-ayushmannkhurrana-070819.jpg",
        name: "Ayushmann Khurrana",
        review: "My First choice destination for Books of any kind and field that too at best prices.",
    },
    {
        image: "https://i.pinimg.com/736x/db/71/9e/db719e16963f8c408d928d25943c01ad.jpg",
        name: "Virat Kohli",
        review: "Whenever I like a Book ,I come here before anywhere and it never disappoints me.I appreciate the teams work.",
    },
    {
        image: "https://th.bing.com/th/id/R.075edefb12496fcd91e06ba3e612e17d?rik=Yo6RgGKtH0bGuA&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2f2016%2f04%2f21%2f452096-amitabh-bachchan-gettyimages.jpg&ehk=4RMGOFUreNwnd5yR2sOnMeIwXVFiJvMACUIapddYooE%3d&risl=&pid=ImgRaw&r=0",
        name: "Amitabh Bachhan",
        review: "Brilliant Book Selling Franchise,has variety of books very fast delhivery and has original books",
    },
    {
        image: "https://filmfare.wwmindia.com/content/2020/jul/late-sushant-singh-rajput-51594726812.jpg",
        name: "Shushant Singh Rajput",
        review: "Best Website for Books' lovers. Never disappoints me you can get any kinds of Books",
    },
]


export default function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:800,
        centerMode:true,
        centerPadding:'1px',
        swipeToSlide:true,
      };
    return (
        
        <div className="h-lvh  flex flex-col gap-10 dark:bg-slate-800 dark:text-white" >
            <div className="h-1/5 w-full flex flex-col justify-center items-center mt-7" data-aos="zoom-in">
                <h3 className="text-md font-semibold text-primary">Top Choice</h3>
                <hr className="bg-gray-400 h-[3px] w-[700px] m-1"></hr>
                <h1 className="text-3xl font-bold text-darksecondary mb-2 ">Testimonials</h1>
                <hr className="bg-gray-400 h-[3px] w-[900px] mb-2"></hr>
                <p className="text-sm font-medium text-gray-400">Below are some reviews of our Famous Users</p>
            </div>
            <div className="h-4/5 flex justify-center items-start " data-aos={"fade-left"}>
                <Slider {...settings} className="max-w-[900px]">
                    {Testimonial.map((testimonial) => (<TestimonialCard image={testimonial.image} name={testimonial.name} review={testimonial.review}></TestimonialCard>))}
                </Slider>
            </div>
        </div>
    )
}