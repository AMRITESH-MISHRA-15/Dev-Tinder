import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res);
      
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      // Handle error
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return <>Nothing to show</>;

  if (requests.length === 0) return <h1>No requests Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-3xl mb-6">Connection Requests</h1>
      {requests.map((connection) => {
        const {_id, firstName, lastName, photoUrl, age, gender, about } =
          connection.fromUserId;

        return (
          <div
            key={_id}
            className="flex m-4 p-4 mx-auto rounded-lg bg-base-300 w-1/2"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
