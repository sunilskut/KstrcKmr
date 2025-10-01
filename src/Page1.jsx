import { Link } from "react-router-dom";
export default function Page1() {
  return (
     <div className="h-screen w-screen flex flex-col items-center justify-center bg-green-100 space-y-6">
      <h1 className="text-4xl font-bold text-blue-700">This is Page 1</h1>
 <Link
          to="/dashboard"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Back
        </Link>
    </div>
  );
}
