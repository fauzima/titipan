import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="grid h-[calc(100vh-4rem)] w-full mt-16 bg-black">
        <div className="col-start-1 row-start-1 self-center w-[600px] h-[600px] bg-green-500 mx-auto rounded-full blur-[120px]"></div>
        <div className="col-start-1 row-start-1 z-10 flex flex-col self-center text-white mx-auto pt-0 p-5 max-w-screen-xl text-justify">
          <div className="text-9xl text-center py-10">TEXT</div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos repellat incidunt totam libero labore iure est unde magnam error enim facilis beatae minus nisi iste minima velit dolore dolores maiores laboriosam dicta ab, sequi porro fugit voluptate. Odio dolorem saepe officia? Cumque molestias cum repellendus blanditiis praesentium enim, facere eligendi. Repellendus reprehenderit, harum eos eius dolor repellat distinctio atque modi nesciunt dolore, ipsa quae numquam, architecto provident veritatis deserunt expedita et omnis! Impedit enim soluta pariatur esse dolor a? Necessitatibus magni dolorem, praesentium voluptatum nisi obcaecati voluptate aut, nulla sunt quidem quas ducimus ut, molestias molestiae dolorum ratione eum corrupti laborum culpa inventore earum laudantium ex iste suscipit! Voluptatem quis reprehenderit magnam facere velit inventore laudantium repellendus quidem, voluptates ut assumenda est accusantium iste pariatur modi illum? Facere numquam maxime rerum laborum dolor. Nesciunt, ipsa, dolorem blanditiis odio perferendis fugiat consequuntur eaque quidem non corporis, accusamus dolore maiores? Ullam mollitia amet inventore voluptatum, dolorem sunt, aspernatur ipsum modi omnis cupiditate, consequuntur impedit reprehenderit iure. Aliquid vero, fugiat veritatis tempore error eos. Enim, debitis officia quas veritatis facilis ex repellendus cumque vel quaerat incidunt laborum. Voluptas similique minima, reiciendis amet sint quas, odit, non corrupti tempore iure quisquam ea voluptatum! Cum?
          </div>
        </div>
        <div className="opacity-25 col-start-1 row-start-1 z-10 pointer-events-none bg-[url('../../public/noise0.png')] animate-noise"></div>
      </div>
      <div className="grid h-[calc(100vh-4rem)] w-full bg-black">
        <div className="col-start-1 row-start-1 self-center w-[600px] h-[600px] bg-blue-500 mx-auto rounded-full blur-[120px]"></div>
        <div className="col-start-1 row-start-1 z-10 flex flex-col self-center text-white mx-auto pt-0 p-5 max-w-screen-xl text-justify">
          <div className="text-9xl text-center py-10">TEXT</div>
        </div>
        <div className="opacity-25 col-start-1 row-start-1 z-10 pointer-events-none bg-[url('../../public/noise0.png')] animate-noise"></div>
      </div>
      <div className="grid h-[calc(100vh-4rem)] w-full bg-black">
        <div className="col-start-1 row-start-1 self-center w-[600px] h-[600px] bg-red-500 mx-auto rounded-full blur-[120px]"></div>
        <div className="col-start-1 row-start-1 z-10 flex flex-col self-center text-white mx-auto pt-0 p-5 max-w-screen-xl text-justify">
          <div className="text-9xl text-center py-10">TEXT</div>
        </div>
        <div className="opacity-25 col-start-1 row-start-1 z-10 pointer-events-none bg-[url('../../public/noise0.png')] animate-noise"></div>
      </div>
      <div className="grid h-[calc(100vh-4rem)] w-full bg-black">
        <div className="col-start-1 row-start-1 self-center w-[600px] h-[600px] bg-yellow-500 mx-auto rounded-full blur-[120px]"></div>
        <div className="col-start-1 row-start-1 z-10 flex flex-col self-center text-white mx-auto pt-0 p-5 max-w-screen-xl text-justify">
          <div className="text-9xl text-center py-10">TEXT</div>
        </div>
        <div className="opacity-25 col-start-1 row-start-1 z-10 pointer-events-none bg-[url('../../public/noise0.png')] animate-noise"></div>
      </div>
      <Footer />
    </div>
  );
}
