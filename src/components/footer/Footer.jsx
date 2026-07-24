import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Button from "../../Button";

const footer = () => {
  return (
    <div className="m-4 flex flex-col rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:m-6 md:m-8">
      <div className="my-4 flex flex-col justify-start rounded-[1.5rem] border border-emerald-100 bg-emerald-50 px-4 py-5 text-slate-800">
        <h1 className="text-lg font-semibold">Subscribe To Our Newsletter</h1>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            name="email"
            id="newsletter-email"
            placeholder="Enter your email"
            className="rounded-xl border border-emerald-200 bg-white p-3 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <Button variant="primary" onClick={() => alert("Subscribed!")}>
            Subscribe
          </Button>
        </div>
      </div>

      <div className="grid place-content-center gap-y-4 sm:grid-cols-3 md:grid-cols-5">
        <div className="flex flex-col items-center">
          <div className="items-centre flex flex-col">
            <div className="group scale-150 cursor-pointer px-1 text-sm text-emerald-700 md:scale-150 lg:scale-200">
              Xplore <span className="text-2xl font-extrabold">.MW</span>
            </div>
            <div className="group flex gap-3 py-4 text-emerald-600">
              <FaFacebook />
              <FaTwitter />
              <FaWhatsapp />
              <FaInstagram />{" "}
            </div>
          </div>
        </div>
        <div>
          <h1 className="cursor-pointer text-slate-900 hover:underline">
            Contacts
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            P.O BOX 445 <br />
            Chichiri <br />
            Blantyre 4 <br />
            Malawi
          </p>
          <p className="mt-2 cursor-pointer text-sm text-slate-600 hover:underline">
            Email: xploremw@gmail.com
          </p>
          <p className="cursor-pointer text-sm text-slate-600 hover:underline">
            Cell: +265 887 353 999
          </p>
        </div>
        <div>
          <h1 className="cursor-pointer text-slate-900 hover:underline">
            Address
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            P.O BOX 445 <br />
            Chichiri <br />
            Blantyre 4 <br />
            Malawi
          </p>
        </div>
        <div>
          <h1 className="cursor-pointer text-slate-900 hover:underline">
            Our Partners
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            JayJnr <br />
            Travel With Mervis
            <br /> Sunbird Nkopola <br /> Blues Bar & Restaurant
          </p>
        </div>
        <div>
          <h1 className="cursor-pointer text-slate-900 hover:underline">
            Customer Support
          </h1>
          <p className="mt-2 text-sm text-slate-600">FAQs</p>
          <p className="text-sm text-slate-600">Weather Forecast</p>
          <p className="text-sm text-slate-600">Security</p>
          <p className="text-sm text-slate-600">Help-Desk</p>
        </div>
      </div>

      <div className="mt-4 flex w-full items-center justify-center rounded-[1rem] bg-emerald-50 px-4 py-3 text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} XploreMW. All rights reserved.</p>
      </div>
    </div>
  );
};

export default footer;
