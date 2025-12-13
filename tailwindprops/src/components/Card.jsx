const Card = ({username, btn='Title'}) => {
    console.log(username);
    
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" className="w-full h-64 object-cover"/>
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{username}</h2>
            <p className="text-gray-700 leading-tight mb-4">
                {btn}
            </p>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover"/>
                    <span className="text-gray-800 font-semibold">John Doe</span>
                </div>
                <span className="text-gray-600">{btn}</span>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card
