import Header from "../components/Header";
export default function Home() {
  return (
    <div className="h-screen w-full bg-black-rgba text-white">
      <Header />
      <div className="flex mx-80 my-16 flex-col">
        <h2 className=" font-extrabold text-[2.5rem] mb-8">Trending</h2>
        <div className="border-l-4 h-full">
          <h1>2</h1>
          <h1>2</h1>
          <h1>2</h1>
        </div>
      </div>
    </div>
  );
}
