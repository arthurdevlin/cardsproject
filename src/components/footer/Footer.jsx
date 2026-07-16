import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Button from "../../Button";

const footer = () => {
  return (
    <div className="bg-white m-4 sm:m-6 md:m-8 flex flex-col">
      <div className="flex flex-col  my-4 pt-2 px-4 justify-start bg-blue-950 text-white">
        <h1>Subscribe To Our Newsletter</h1>
        <div className="">
          <input
            type="email"
            name="email"
            id="newsletter-email"
            placeholder="Enter your email"
            className="bg-blue-950 p-2 gap- text-white placeholder:text-blue-200 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 m-2 rounded-xl"
          />
          <Button  variant="primary" onClick={() => alert("Subscribed!")} >
            Subscribe
          </Button>
        </div>
      </div>
      {/* footerstuff */}
      <div className="grid place-content-center gap-y-4 sm:grid-cols-3 md:grid-cols-5">
        <div className="flex flex-col items-center">
          <div className="items-centre flex flex-col">
            <div className=" group scale-150 md:scale-150 lg:scale-200 px-1 text-blue-950 text-sm cursor-pointer">
              Xplore <span className="font-extrabold text-2xl ">.MW</span>
              {/* <span className="relative group bg-blue-950 text-white p-1 text-lg rounded-2xl hover:bg-white hover:text-blue-950 hover:shadow-lg hover:shadow-blue-500/50 hover:transition-transform hover:duration-600 ">
            .MW
          </span> */}
            </div>
            <div className=" flex py-4 gap-3 group scale-120 text-blue-950">
              <FaFacebook />
              <FaTwitter />
              <FaWhatsapp />
              <FaInstagram />{" "}
            </div>
          </div>
        </div>
        <div>
          <h1 className="cursor-pointer hover:underline">Contacts</h1>
          <p>
            P.O BOX 445 <br />
            Chichiri <br />
            Blantyre 4 <br />
            Malawi
          </p>
          <p className="cursor-pointer hover:underline">
            Email: xploremw@gmail.com
          </p>
          <p className="cursor-pointer hover:underline">
            Cell: +265 887 353 999
          </p>
        </div>
        <div>
          {" "}
          <h1 className="cursor-pointer hover:underline">Address</h1>
          <p>
            P.O BOX 445 <br />
            Chichiri <br />
            Blantyre 4 <br />
            Malawi
          </p>
        </div>
        <div>
          <h1 className="cursor-pointer hover:underline">Our Partiners</h1>
          <p>
            JayJnr <br />
            Travel With Mervis
            <br /> Sunbird Nkopola <br /> Blues Bar & Restuarant
          </p>
        </div>
        <div className="">
          <h1 className="cursor-pointer hover:underline">Customer Support</h1>
          <p>FAQs</p>
          <p>Weather Forecast</p>
          <p>Security</p>
          <p>Help-Desk</p>
        </div>
      </div>
      {/* copryright */}
      <div className="items-center w-full flex justify-center text-white bg-blue-950">
        <p>&copy; {new Date().getFullYear()} XploreMW. All rights reserved.</p>
      </div>
    </div>
  );
};

export default footer;
