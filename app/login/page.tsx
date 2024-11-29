// // "use client";

// // import { useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { useRouter } from "next/navigation";

// // export default function LoginPage() {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   const [loading, setLoading] = useState(false);

// //   const router = useRouter(); // For redirection after login

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     setLoading(true);

// //     try {
// //       // Send login request
// //       const response = await axios.post("/api/auth/login", {
// //         email: formData.email,
// //         password: formData.password,
// //       });

// //       // If login is successful, store the token in cookies
// //       const { token } = response.data;
// //       document.cookie = `token=${token}; path=/;`;

// //       toast.success("Login successful");

// //       // Redirect to the dashboard or protected page
// //       router.push("/dashboard"); // or any other protected route
// //     } catch (error: any) {
// //       const errorMessage = error.response?.data?.message || "Login failed";
// //       toast.error(errorMessage);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-50">
// //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
// //         <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
// //           Login
// //         </h2>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label
// //               htmlFor="email"
// //               className="block text-sm font-medium text-gray-700"
// //             >
// //               Email
// //             </label>
// //             <input
// //               id="email"
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleInputChange}
// //               required
// //               className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //             />
// //           </div>

// //           <div>
// //             <label
// //               htmlFor="password"
// //               className="block text-sm font-medium text-gray-700"
// //             >
// //               Password
// //             </label>
// //             <input
// //               id="password"
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleInputChange}
// //               required
// //               className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           >
// //             {loading ? "Logging In..." : "Login"}
// //           </button>
// //         </form>

// //         <p className="mt-4 text-center text-gray-600">
// //           Don't have an account?{" "}
// //           <a href="/signup" className="text-blue-600 hover:underline">
// //             Sign up
// //           </a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const router = useRouter(); // For redirection after login

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       // Send login request
//       const response = await axios.post("/api/auth/login", {
//         email: formData.email,
//         password: formData.password,
//       });

//       // If login is successful, store the token in cookies
//       const { token, role } = response.data;

//       // Set the cookie for JWT
//       document.cookie = `token=${token}; path=/;`;

//       toast.success("Login successful");

//       // Redirect based on role
//       if (role === "ADMIN") {
//         router.push("/dashboard/admin");
//       } else if (role === "EMPLOYEE") {
//         router.push("/dashboard/employee");
//       } else if (role === "USER") {
//         router.push("/dashboard/user");
//       } else {
//         toast.error("Unknown role");
//       }
//     } catch (error: any) {
//       const errorMessage = error.response?.data?.message || "Login failed";
//       toast.error(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
//           Login
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//               className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className={`w-full py-2 bg-blue-600 text-white rounded-md ${
//               loading && "opacity-50 cursor-not-allowed"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter(); // For redirection after login

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Send login request
      const response = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // If login is successful, store the token in cookies
      const { token, user } = response.data;

      // Set the cookie for JWT
      document.cookie = `token=${token}; path=/;`;

      toast.success("Login successful");

      // Redirect based on role
      if (user.role === "ADMIN") {
        router.push("/dashboard/admin");
      } else if (user.role === "EMPLOYEE") {
        router.push("/dashboard/employee");
      } else if (user.role === "USER") {
        router.push("/dashboard/user");
      } else {
        toast.error("Unknown role");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Login failed";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 bg-blue-600 text-white rounded-md ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
