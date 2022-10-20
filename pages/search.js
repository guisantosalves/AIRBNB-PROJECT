import * as React from "react";
import { useRouter } from "next/router";
import format from "date-fns/format";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

// the component needs the uppercase, the file doesn't
const Search = () => {
  const router = useRouter();

  // es6 destruction
  const {location, startDate, endDate, noOfGuests} = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const rangeOfDates = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${rangeOfDates} | ${noOfGuests}`}/>
      <main className="flex">
        <section className="flex-grow pt-14 px-6 ">
          <p className="text-xs">300+ Stays - {rangeOfDates} - for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          {/* Sequences of whitespace will collapse into a single whitespace. Text will never wrap to the next line.
                    The text continues on the same line until a <br> tag is encountered */}
          <div
            className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800
                    whitespace-nowrap"
          >
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
