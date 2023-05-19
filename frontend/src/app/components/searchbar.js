import Image from 'next/image';

export default function SearchBar() {
  return (
    <section className="flex justify-between items-center m-5">
      <div className='search-input'>
        <div>
            <p>search...</p> 
        </div>
        <Image
                src="/assets/icons/search.png"
                width={30}
                height={30}
                alt="Search button"

            />
      </div>
      <Image
            src="/assets/icons/filter.png"
            width={50}
            height={50}
            alt="Filter button"
        />
    </section>
  );
}