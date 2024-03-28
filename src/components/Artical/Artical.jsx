import logo from '../../imgae/The_Guardian_(novel).jpg';
const Artical = () => {
    return (
        <div>
            <h1 className='text-2xl mt-2 text-center font-bold italic'>The Guardian Book (novel)</h1>
            <br /><br />
            <div>
                <div className="hero italic">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                    <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-5'>
                    <p className='mt-5'><span className='font-bold text-lg'>Author</span> <span className='ml-2'>Nicholas Sparks</span></p>
                        <p className='mt-2'><span className='font-bold text-lg'>Country</span> <span className='ml-2'>United States</span></p>
                        <p className='mt-2'><span className='font-bold text-lg'>Language</span> <span className='ml-2'>English</span></p>
                        <p className='mt-2'><span className='font-bold text-lg'>Genre</span> <span className='ml-2'>Novel</span></p>
                        <p className='mt-2'><span className='font-bold text-lg'>Publisher</span> <span className='ml-2'>Waner Books</span></p>
                        <p className='mt-2'><span className='font-bold text-lg'>Publisher Date</span> <span className='ml-2'>2003</span></p>
                    </div>
                    </div>
                    
                    <div>
                        <p>From Wikipedia, the free encyclopedia</p><br />
                        <p><span className="font-bold">The Guardian</span> is the seventh novel by the American writer <a href="https://en.wikipedia.org/wiki/Nicholas_Sparks" className="font-bold text-sky-300" target="blank">Nicholas Sparks</a>. The book is about a <a href="https://en.wikipedia.org/wiki/Great_Dane" className="font-bold text-sky-300" target="blank">Grate Dena</a> named Singer who is the pet of a widow named Julie who is trying to find a new <a href="https://en.wikipedia.org/wiki/Life_partner" className="font-bold text-sky-300" target="blank">Life Partner</a>. Among those she considers are Mike, an old friend of hers, and Richard, a successful manager. [1]</p> <br /><br />

                        <div>
                            <h1 className="text-xl font-bold ">Themes</h1><br /> <hr /> 
                            <p>The novel deals with the themes of <a href="https://en.wikipedia.org/wiki/Obsessive_love" className="font-bold text-sky-300" target="blank"> obsessive love</a>, as it attempts to show the inner world of a highly intelligent murderer living with no ethics at all.[2]</p>
                        </div>
                        <br />
                        <div>
                            <h1 className="text-xl font-bold ">References</h1><br /> <hr /> 
                            <p><a href="https://books.google.com/books?id=DyxAPwAACAAJ&" className="font-bold text-sky-300" target="blank">The Guardian </a>. Google Books. Retrieved February 2, 2021.[2]</p>
                            <p> Exum, David. <a href="https://books.google.com/books?id=DyxAPwAACAAJ&" className="font-bold text-sky-300" target="blank">The Guardian </a>. bookreporter.com. Retrieved February 2, 2021.
[2]</p>
                        </div>
                        <br />
                        <div>
                            <h1 className="text-xl font-bold ">External links</h1><br /> <hr />
                            <ul>
                                <li><a className="font-bold text-sky-300" target="blank" href="https://www.amazon.de/gp/reader/0446613436/ref=sib_dp_pt#reader-page">Cover, first six pages and back of the novel</a></li>
                                <li><a className="font-bold text-sky-300" target="blank" href="http://nicholassparks.com/">Official Nicholas Sparks website</a></li>
                            </ul>
                        </div>


                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Artical;