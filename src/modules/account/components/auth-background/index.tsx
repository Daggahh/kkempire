// "use client";

// import Image from "next/image";

// // Simple grid collage of brand images. Replace URLs with actual IG CDN links or local images.
// // Expecting 12 images placed in /public/auth-grid as 1.jpg ... 12.jpg (or png)
// const images = Array.from({ length: 12 }, (_, i) => `/auth-grid/${i + 1}.jpg`)

// const AuthBackground = () => {
//   return (
//     <div className="pointer-events-none fixed inset-0 -z-10 grid grid-cols-2 small:grid-cols-3 md:grid-cols-4 gap-[2px] bg-empire-sand dark:bg-empire-midnight">
//       {images.map((src, i) => (
//         <div key={i} className="relative aspect-square overflow-hidden group">
//           <Image
//             src={src}
//             alt="KKempire preview"
//             fill
//             sizes="33vw"
//             className="object-cover transition-transform duration-300 group-hover:scale-105"
//             priority={i < 6}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AuthBackground;
