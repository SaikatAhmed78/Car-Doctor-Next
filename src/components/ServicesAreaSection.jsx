import dbConnect from '@/lib/dbConnect';
import React from 'react';

export default async function ServicesAreaSection() {
    // Fetch data from MongoDB
    const serviceCollection = dbConnect('test_services');
    const data = await serviceCollection.find({}).toArray();

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
