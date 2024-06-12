import Clients from "./Clients";
const HappyClient = () => {
    const clients = [
        {
            name: 'Emily Johnson',
            image: 'https://i.ibb.co/gdrCqJB/OIP-1.jpg',
            comment: 'We adopted the sweetest kitten from Pet Paradise. Couldn\'t be happier!',
        },
        {
            name: 'Michael Smith',
            image: 'https://i.ibb.co/Fmbdzhz/OIP.jpg',
            comment: 'Adopting our dog from Pet Paradise was the best decision we ever made!',
        },
    ];
    return (
        <div>
            <section className="py-12 bg-[#F07C3D] bg-opacity-5">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-8">Our Happy Clients</h2>
                    <div className="flex flex-wrap justify-center">
                        {clients.map((client, index) => (
                            <Clients key={index} {...client} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HappyClient;