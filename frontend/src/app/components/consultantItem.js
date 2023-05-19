import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className="flex justify-between items-center m-5">
      <div>
        <div>
            <Image 
            />
            <div>
                <h2></h2>
                <h3></h3>
            </div>
        </div>
        <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        </p>

        <div>
            <button>Learn more</button>
            <button>Book A Session</button>
        </div>
        
      </div>
    </div>
  );
}