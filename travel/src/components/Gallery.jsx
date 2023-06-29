
const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
        <h2 className="text-center text-gray-700 p-4">Gallery</h2>
        <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542353436-312f0e1f67ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"/>
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529348915581-73628f0cf212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"/>
        </div>
        <div>
            <img className="w-full h-full object-cover"  src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1683295550807-bf5b3557d1a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZyZWUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"/>
        </div>
        <div>
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1656599504403-25bcd91bd8c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZyZWUlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"/>
        </div>
    </div>
  </div>
  )
}

export default Gallery