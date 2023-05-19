import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="flex justify-between items-center custom-header">
      <div className="flex items-center justify-between gap-80 mx-auto p-5 custom-header-holder">
        <div className="w-12 h-12">
          <Image
            src="/assets/icons/logo.png"
            width={50}
            height={50}
            alt="ConSalt Logo"
          />
        </div>
        <nav>
          <div className="w-12 h-12">
            <Image
              src="/assets/icons/nav.png"
              width={50}
              height={50}
              alt="ConSalt Nav bar"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
