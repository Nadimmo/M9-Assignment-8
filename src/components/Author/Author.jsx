const Author = () => {
    const authors = [
        {
            id: 1,
            name: "Gabriel García Márquez",
            description:
                "The Colombian novelist and Nobel laureate is best known for 'One Hundred Years of Solitude', a masterpiece of magical realism.",
            image: "https://i.ibb.co.com/rM2S9bf/author.jpg",
            notableWorks: ["One Hundred Years of Solitude", "Love in the Time of Cholera"],
            awards: ["Nobel Prize in Literature (1982)"],
            country: "Colombia",
        },
        {
            id: 2,
            name: "Toni Morrison",
            description:
                "An American novelist celebrated for her profound storytelling, tackling themes of race, identity, and history.",
            image: "https://i.ibb.co.com/QjHk5mS/a.jpg",
            notableWorks: ["Beloved", "Song of Solomon"],
            awards: ["Nobel Prize in Literature (1993)", "Pulitzer Prize"],
            country: "United States",
        },
        {
            id: 3,
            name: "Haruki Murakami",
            description:
                "A Japanese author whose works blend surrealism and realism, exploring the complexity of modern life.",
            image: "https://i.ibb.co.com/8m0ydTC/aa.webp",
            notableWorks: ["Kafka on the Shore", "Norwegian Wood"],
            awards: ["World Fantasy Award", "Franz Kafka Prize"],
            country: "Japan",
        },
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Best World Authors</h2>
                <p className="text-center text-gray-600 mb-10">
                    Explore the lives and works of authors who have left an indelible mark on global literature.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {authors.map((author) => (
                        <div
                            key={author.id}
                            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={author.image}
                                alt={author.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                                <p className="text-gray-600 mb-4">{author.description}</p>
                                <p className="mb-2">
                                    <strong>Notable Works:</strong> {author.notableWorks.join(", ")}
                                </p>
                                <p className="mb-2">
                                    <strong>Awards:</strong> {author.awards.join(", ")}
                                </p>
                                <p className="mb-2">
                                    <strong>Country:</strong> {author.country}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Author;
