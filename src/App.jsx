import React, { useEffect, useState } from "react";

const App = () => {
  const [Counter, setCouter] = useState(1);
  const handleCounter = () => {
    setCouter(Counter + 1);
  };
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${Counter}&results=1&seed=abc`)
      .then((response) => response.json())
      .then((data) => setuser(data.results))
      .then((error) => console.log("Error while fetching data", error));
  }, [Counter]);
  return (
    <div className="h-screen w-full bg-teal-800 flex items-center justify-center">
      {user.map((ele) => (
        <div className="h-[300px] w-[600px] bg-slate-200  border-2 border-zinc-400  border-solid  flex items-center justify-center rounded-md">
          <div className="h-[250px] w-[500px] bg-slate-300 border-solid rounded-md border-zinc-400 border-2 flex items-center justify-center gap-10">
            <div className="h-[160px] w-[160px] rounded-md border-2 border-teal-500 border-solid">
              <img
                className="object-cover h-full w-full "
                src={ele.picture.large}
                alt=""
              />
            </div>
            <div className=" text-2xl">
              <h2 className="font-semibold">
                {" "}
                Name:{ele.name.first} {ele.name.last}
              </h2>
              <h4> Age:{ele.dob.age}</h4>
              <h4> Phone:{ele.phone}</h4>
              <h5> Gender:{ele.gender}</h5>
            </div>
          </div>
        </div>
      ))}

      <button
        className="bg-green-400 py-4 px-10 ml-10 rounded-md text-xl"
        onClick={handleCounter}
      >
        Next: {Counter}
      </button>
    </div>
  );
};

export default App;
