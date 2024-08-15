// "use client"
// import { useRouter } from 'next/navigation';

// const Category = ({ category }) => {
//   const router = useRouter();

//   return (
//     <div
//       className="relative w-full md:w-1/3 h-64 bg-cover bg-center cursor-pointer"
//       style={{ backgroundImage: `url(${category.image})` }}
//       onClick={() => router.push(`/category/${category.key}`)}
//     >
//       <div className="absolute inset-0 bg-black opacity-40 hover:opacity-50 transition duration-200"></div>
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <h3 className="text-white text-2xl font-semibold">{category.title}</h3>
//       </div>
//     </div>
//   );
// };

// export default Category;
