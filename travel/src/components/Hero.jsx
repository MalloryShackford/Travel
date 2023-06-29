
const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1627024362067-b7698910b0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
          <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            doloribus totam dicta ab ratione. Explicabo eveniet dolor, omnis in
            recusandae temporibus suscipit cum nihil officia deserunt possimus
            saepe praesentium accusamus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero