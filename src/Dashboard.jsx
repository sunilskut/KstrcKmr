import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-green-100 space-y-6">
      <h1 className="text-4xl font-bold text-green-700">Welcome to Dashboard!</h1>
      <div className="flex space-x-4">
        <Link
          to="/page1"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go to Page 1
        </Link>
        <Link
          to="/page2"
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        >
          Go to Page 2
        </Link>
      </div>
    </div>
  );
}
