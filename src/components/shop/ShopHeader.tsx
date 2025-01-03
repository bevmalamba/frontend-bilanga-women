
const ShopHeader = () => {
  return (
    <div className="relative h-[200px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">SHOP</h1>
      </div>
    </div>
  );
};

export default ShopHeader;