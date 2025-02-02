import React from 'react'

export default async function ServicesAreaSection() {

    // const res = await fetch("/public/services.json");
    const data = [
        {
            _id: 1,
            service_id: 4,
            title: "Engine Oil Change",
            img: "https://i.ibb.co/T2cpBd5/888.jpg",
            price: 20.0,
            description: "Ensure optimal engine performance with our premium oil change service. Keep your car running smoothly and efficiently.",
            facility: [
                {
                    name: "Instant Car Service",
                    details: "Quick and reliable oil change service to minimize downtime and keep your vehicle in top condition."
                },
                {
                    name: "24/7 Quality Service",
                    details: "Our expert mechanics are available around the clock to provide top-notch service at your convenience."
                },
                {
                    name: "Hassle-Free Customer Experience",
                    details: "Enjoy a seamless service process with professional support and minimal waiting time."
                },
                {
                    name: "Affordable & Transparent Pricing",
                    details: "Get high-quality service at competitive prices with no hidden costs."
                }
            ]
        },
        {
            _id: 2,
            service_id: 5,
            title: "Battery Charging",
            img: "https://i.ibb.co/ydCbDN3/5555.jpg",
            price: 20.0,
            description: "Restore your car battery’s power with our efficient and safe charging service to prevent unexpected breakdowns.",
            facility: [
                {
                    name: "Fast & Efficient Charging",
                    details: "Advanced battery charging technology ensures a quick and effective power boost for your vehicle."
                },
                {
                    name: "Round-the-Clock Service",
                    details: "Emergency battery charging available 24/7 for your convenience and peace of mind."
                },
                {
                    name: "Expert Diagnosis",
                    details: "Our professionals inspect your battery’s health and provide expert recommendations."
                },
                {
                    name: "Affordable & Reliable",
                    details: "Cost-effective solutions with guaranteed quality and long-lasting results."
                }
            ]
        },
        {
            _id: 3,
            service_id: 1,
            title: "Full Car Repair",
            img: "https://i.ibb.co/R6Z2nFM/55.jpg",
            price: 200.0,
            description: "Comprehensive repair services to restore your vehicle’s performance and safety, ensuring a smooth driving experience.",
            facility: [
                {
                    name: "Expert Technicians",
                    details: "Our certified professionals handle all types of repairs with precision and care."
                },
                {
                    name: "Advanced Diagnostic Tools",
                    details: "State-of-the-art equipment to detect and fix issues efficiently."
                },
                {
                    name: "Genuine Spare Parts",
                    details: "We use high-quality, manufacturer-approved parts for reliable repairs."
                },
                {
                    name: "Customer Satisfaction Guaranteed",
                    details: "We prioritize quality and customer satisfaction in every repair job."
                }
            ]
        },
        {
            _id: 4,
            service_id: 2,
            title: "Engine Repair",
            img: "https://i.ibb.co/5MvmD2g/88.jpg",
            price: 150.0,
            description: "Professional engine repair services to enhance your car’s power, fuel efficiency, and longevity.",
            facility: [
                {
                    name: "Detailed Engine Inspection",
                    details: "Thorough diagnostics to identify and fix performance issues."
                },
                {
                    name: "Certified Engine Specialists",
                    details: "Highly skilled mechanics with years of experience in engine repairs."
                },
                {
                    name: "Quality Assurance",
                    details: "We use only high-quality parts and advanced repair techniques."
                },
                {
                    name: "Warranty on Repairs",
                    details: "Enjoy peace of mind with our guaranteed engine repair services."
                }
            ]
        },
        {
            _id: 5,
            service_id: 3,
            title: "Automatic Transmission Service",
            img: "https://i.ibb.co/wh7t3N3/555.jpg",
            price: 30.0,
            description: "Enhance your vehicle's performance with our professional automatic transmission servicing and maintenance.",
            facility: [
                {
                    name: "Smooth Gear Transitions",
                    details: "Ensure a seamless driving experience with properly maintained automatic transmission."
                },
                {
                    name: "High-Tech Diagnostics",
                    details: "We use advanced tools to accurately diagnose transmission issues."
                },
                {
                    name: "Preventative Maintenance",
                    details: "Extend the lifespan of your transmission with regular servicing."
                },
                {
                    name: "Guaranteed Quality",
                    details: "Our service includes high-quality fluids and expert repair solutions."
                }
            ]
        },
        {
            _id: 6,
            service_id: 6,
            title: "Electrical System Repair",
            img: "https://i.ibb.co/KzCG8qr/8888.jpg",
            price: 20.0,
            description: "Expert electrical system diagnosis and repair to keep your car’s electronics functioning perfectly.",
            facility: [
                {
                    name: "Advanced Electrical Diagnostics",
                    details: "Pinpoint electrical issues quickly with our cutting-edge diagnostic tools."
                },
                {
                    name: "Certified Auto Electricians",
                    details: "Our skilled professionals handle all electrical repairs with precision."
                },
                {
                    name: "Battery & Alternator Checks",
                    details: "Ensure your car’s electrical system is always in top condition."
                },
                {
                    name: "Safe & Reliable Repairs",
                    details: "All repairs are performed to industry standards to guarantee safety and longevity."
                }
            ]
        }
    ];



    return (
        <div className="w-11/12 mx-auto py-12 text-center">
            <h1 className="text-4xl font-thin mb-6 text-red-600">Service</h1>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Service Area</h2>
            <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
                The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-2xl group relative"
                    >
                
                        <img
                            src={item.img}
                            alt={`Image of ${item.title}`}
                            className="w-full h-56 object-cover"
                        />
    
                   
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                            <p className="text-lg font-medium text-green-600">${item.price}</p>
    
            
                            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                                <p className="text-white text-sm text-center">
                                    {item.description}
                                </p>
                            </div>
    
                           
                            <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 relative overflow-hidden group">
                                <span className="relative z-10">More Details ➔</span>
                                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
    
         
            <button className="mt-10 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 relative overflow-hidden group">
                <span className="relative z-10">More Services</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></span>
            </button>
        </div>
    );
}
