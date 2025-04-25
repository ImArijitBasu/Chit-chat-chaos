import "./App.css";

function App() {
  return (
    <>
      <div className=" container mx-auto my-20 ">
        <h1 className="text-4xl uppercase text-center my-5">colors</h1>
        <div className=" grid grid-cols-4 gap-2 text-center">
          <h1 className="text-2xl font-bold bg-ash">ash color</h1>
          <h1 className="text-2xl font-bold bg-blue">blue color</h1>
          <h1 className="text-2xl font-bold bg-charcoal text-white">
            charcoal color
          </h1>
          <h1 className="text-2xl font-bold bg-yellow">yellow color</h1>
          <h1 className="text-2xl font-bold bg-green">green color</h1>
        </div>
        <p className="my-5"><span className="text-red-500 px-1">*</span>add your colors and fonts in index.css file</p>
      </div>
    </>
  );
}

export default App;
