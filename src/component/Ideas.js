function App() {
    return (
    <>
      <div className='bg-cover h-[28rem] flex flex-col items-center justify-center text-white mb-5' 
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/6.jpg)',
        backgroundSize: 'cover',
        backgroundPositionY: "50%",
        clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",}}>
        <h1 style={{ fontSize: 60}}>Ideas</h1>
        <h4 style={{ fontSize: 25}}>Where all our great things begin</h4>
      </div>
    </>
    );
  }
  
  export default App;
  