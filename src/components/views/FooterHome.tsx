export default function FooterHome() {
  return (
    <div className="overflow-hidden">
      <div className="bg-[url('/assets/images/footer-home.svg')] bg-cover bg-center w-full min-h-screen text-white flex justify-center mt-[331px]">
        <div className="flex flex-col items-center mt-[74px] w-full px-6">
          <h1 className="font-extralight w-full md:max-w-[1285px] text-3xl md:text-4xl lg:text-5xl text-center tracking-wide">
            Find the perfect trip for you and discover extraordinary adventures
            with us!
          </h1>

          <p className="font-semibold text-lg md:text-2xl tracking-wide text-center mt-[9px]">
            Find the perfect trip for you and discover extraordinary adventures
            with us!
          </p>

          <h1 className="font-bold italic text-[50px] md:text-[120px] lg:text-[200px] tracking-wide text-center mt-[100px] md:mt-[335px]">
            VISTANUSA
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1285px] mt-[70px] px-6">
            <div className="font-bold tracking-wide text-3xl">VISTANUSA</div>
            <div className="flex items-center font-bold text-lg md:text-2xl underline gap-x-5 md:gap-x-[70px]">
              <p>About Us</p>
              <p>Source Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
