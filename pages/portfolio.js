import React, { useState } from "react";
import Section from "../components/layouts/Section";
import Portfolio from "../components/portfolio/Portfolio";
import PortfolioDetail from "../components/portfolio/PortfolioDetail";
import MetaSeo from "../components/MetaSeo";
import http from "../utilities/http";
import constant from "../utilities/constant";
import { useRouter } from "next/router";
import { promises as fs } from 'fs';

// export default function Portofolio({ portfolios }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [singleData, setSingleData] = useState([]);

//   const handleOpenModal = (value) => {
//     setSingleData(value);
//     setIsOpen(true);
//   };

//   const handleCloseModal = () => setIsOpen(false);

//   const router = useRouter();
//   const handleFilter = (e) => {
//     const value = e.target.value;
//     if (value !== "all") {
//       router.query.filter = value;
//       router.push(router);
//     } else {
//       router.push("/portfolio");
//     }
//   };

//   const nextData = () => {
//     const index = portfolios.findIndex((value) => value._id === singleData._id);
//     if (index + 1 < portfolios.length) {
//       setSingleData(portfolios[index + 1]);
//     }
//   };

//   const prevData = () => {
//     const index = portfolios.findIndex((value) => value._id === singleData._id);
//     if (index - 1 >= 0) {
//       setSingleData(portfolios[index - 1]);
//     }
//   };

//   return (
//     <Section
//       title="Portfolio"
//       subtitle= "Some of the work I have done in the recent year."
//       action={
//         <select
//           className="text-gray-500 ring-0 dark:border-gray-600 dark:bg-black dark:text-white outline-none cursor-pointer border w-full lg:w-52 py-3 px-5 border-dashed rounded-sm"
//           onChange={handleFilter}
//         >
//           <option value="all">All</option>
//           <option value="Mobile Application">Mobile Application</option>
//           <option value="Web Application">Web Application</option>
//           <option value="AI Development">AI Development</option>
//         </select>
//       }
//     >
//     <div>Hello {typeof(portfolios)}</div>
//       <MetaSeo
//         title="Portfolio - Kevin Cattt"
//         description={
//           "Some of the projects I have done in the recent year."
//         }
//       />
//       <div
//         className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6"
//         data-aos="fade-up"
//       >
//         <Portfolio
//             key={1}
//             img="/img/kevin.jpg"
//             title="Bibliotecca"
//             category="Web Application"
//             onClick={() => handleOpenModal(value)}
//           />
//         {/* {portfolios.map((value) => (
//           <Portfolio
//             key={value._id}
//             img={constant.storage + `${value.img?.path}`}
//             title={value.title}
//             category={value.category}
//             onClick={() => handleOpenModal(value)}
//           />
//         ))} */}
//       </div>
//       <PortfolioDetail
//         isOpen={isOpen}
//         onClose={handleCloseModal}
//         data={singleData}
//       >
//         {isOpen && (
//           <>
//             <button
//               onClick={prevData}
//               className="fixed ml-5 left-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 19.5L8.25 12l7.5-7.5"
//                 />
//               </svg>
//             </button>
//             <button
//               onClick={nextData}
//               className="fixed mr-5 right-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M8.25 4.5l7.5 7.5-7.5 7.5"
//                 />
//               </svg>
//             </button>
//           </>
//         )}
//       </PortfolioDetail>
//     </Section>
//   );
// }

export default function Portofolio({ posts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [singleData, setSingleData] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');
  // const filteredPosts = selectedCategory ? posts.filter(post => post.category === selectedCategory) : posts;
  const filteredPosts = selectedCategory && selectedCategory !== 'all' ? posts.filter(post => post.category === selectedCategory) : posts;
  const handleCategorySelection = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleOpenModal = (value) => {
    setSingleData(value);
    setIsOpen(true);
  };

  const handleCloseModal = () => setIsOpen(false);

  const nextData = () => {
    const index = posts.findIndex((value) => value._id === singleData._id);
    if (index + 1 < posts.length) {
      setSingleData(posts[index + 1]);
    }
  };

  const prevData = () => {
    const index = posts.findIndex((value) => value._id === singleData._id);
    if (index - 1 >= 0) {
      setSingleData(posts[index - 1]);
    }
  };

  return (
    <Section
      title="Portfolio"
      subtitle= "Some of the work I have done in the recent year." 
      action={
        <select
          className="text-gray-500 ring-0 dark:border-gray-600 dark:bg-black dark:text-white outline-none cursor-pointer border w-full lg:w-52 py-3 px-5 border-dashed rounded-sm"
          onChange={handleCategorySelection}
          // onChange={handleFilter}
        >
          <option value="all">All</option>
          <option value="Software Application">Software Application</option>
          <option value="Mobile Application">Mobile Application</option>
          <option value="Web Application">Web Application</option>
          <option value="AI Application">AI Application</option>
        </select>
      }
    >
      <MetaSeo
        title="Portfolio - Kevin Cattt"
        description={
          "Some of the projects I have done in the recent year."
        }
      />
      <div
        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-6"
        data-aos="fade-up"
      >
        {filteredPosts.map((value) => (
          <Portfolio
            key={value._id}
            // img={constant.storage + `${value.img?.path}`}
            img = {value.img}
            title={value.title}
            category={value.category}
            onClick={() => handleOpenModal(value)}
          />
        ))}
      </div>
      <PortfolioDetail
        isOpen={isOpen}
        onClose={handleCloseModal}
        data={singleData}
      >
        {isOpen && (
          <>
            <button
              onClick={prevData}
              className="fixed ml-5 left-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextData}
              className="fixed mr-5 right-0 top-[50%] z-50 border-2 ring-0 border-dashed h-14 borer w-14 lg:flex hidden justify-center items-center rounded-full dark:border-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}
      </PortfolioDetail>
    </Section>
  );
}

export async function getStaticProps() {
  const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
  const data = JSON.parse(file);
  return {
    // props: { message: `Next.js is awesome` }, // will be passed to the page component as props
    props: {
      // posts: { title: `Next.js is awesome` },
      posts: data,
    },
  }
}

// export async function getServerSideProps({ query }) {
//   let url = "items/portfolio";
//   if (query.filter) {
//     const params = encodeURIComponent(
//       JSON.stringify({ category: query.filter })
//     );
//     const filter = `?filter=${params}`;
//     url = `items/portfolio${filter}`;
//   }
//   const req = await http.get(url);
//   return {
//     props: {
//       portfolios: req.data,
//     },
//   };
// }
