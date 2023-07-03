import React, { useState } from 'react';


const Notice = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  // 게시글 목록 데이터
  const posts = [
    { id: 1, title: '게시글 1', author: '작성자 1', date: '2023-06-30' },
    { id: 2, title: '게시글 2', author: '작성자 2', date: '2023-07-01' },
    { id: 3, title: '게시글 3', author: '작성자 3', date: '2023-07-02' },
    { id: 1, title: '게시글 1', author: '작성자 1', date: '2023-06-30' },
    { id: 2, title: '게시글 2', author: '작성자 2', date: '2023-07-01' },
    { id: 3, title: '게시글 3', author: '작성자 3', date: '2023-07-02' },
    { id: 1, title: '게시글 1', author: '작성자 1', date: '2023-06-30' },
    { id: 2, title: '게시글 2', author: '작성자 2', date: '2023-07-01' },
    { id: 3, title: '게시글 4', author: '작성자 3', date: '2023-07-02' },
    { id: 1, title: '게시글 1', author: '작성자 1', date: '2023-06-30' },
    { id: 2, title: '게시글 2', author: '작성자 2', date: '2023-07-01' },
    { id: 3, title: '게시글 3', author: '작성자 3', date: '2023-07-02' },
    { id: 1, title: '게시글 111', author: '작성자 1', date: '2023-06-30' },
    { id: 2, title: '게시글 2', author: '작성자 2', date: '2023-07-01' },
    { id: 3, title: '게시글 3', author: '작성자 3', date: '2023-07-02' },
    { id: 1, title: '게시글 1', author: '작성자 1', date: '2023-06-30' },
    { id: 2, title: '게시글 2', author: '작성자 2', date: '2023-07-01' },
    { id: 3, title: '게시글 3', author: '작성자 3', date: '2023-07-02' },
    { id: 1, title: '게시글 1232', author: '작성자 1', date: '2023-06-30' },
    { id: 2, title: '게시글 2', author: '작성자 2', date: '2023-07-01' },
    { id: 3, title: '게시글 3', author: '작성자 3', date: '2023-07-02' },
    // 추가적인 게시글 데이터를 여기에 추가
  ];

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 특정 페이지로 이동
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지의 게시글 목록
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold text-center mt-4 text-white">공지 사항</h1>
      <div className="flex items-center justify-center mb-10 mt-10">
      <h1 className="text-4xl text-center mr-2 text-main_mid">서비스</h1>
        <h1 className="text-4xl font-bold text-center text-main">공지 사항</h1>
      </div>
      

      {/* 게시글 분류와 검색 */}
      <div className="flex items-center justify-between mb-4">
        {/* 게시글 분류 */}
        <div className="relative">
          <button
            type="button"
            className="py-2 px-4 text-sm bg-white rounded-full px-6 focus:outlines-none text-blues border border-black mr-4"
            onClick={toggleCategory}
          >
            {selectedCategory || '제목'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 -mr-1 inline-block align-middle"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M6.5 7l5 5 5-5H6.5z" clipRule="evenodd" />
            </svg>
          </button>
          {isCategoryOpen && (
            <div className="absolute z-10 mt-2 bg-white rounded-md shadow-md">
              <ul className="py-2">
                <li>
                  <button
                    type="button"
                    className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                    onClick={() => selectCategory('카테고리 1')}
                  >
                    카테고리 1
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                    onClick={() => selectCategory('카테고리 2')}
                  >
                    카테고리 2
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                    onClick={() => selectCategory('카테고리 3')}
                  >
                    카테고리 3
                  </button>
                </li>
                {/* 추가적인 카테고리 항목은 여기에 추가 */}
              </ul>
            </div>
          )}
        </div>

        {/* 게시글 검색 */}
        <div className="flex-grow px-2">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <button className="bg-main_mid rounded-full p-2 text-white">돋</button>
      </div>

      {/* 게시글 목록 */}
      <ul className="mt-6 bg-main_light rounded-xl divide-y divide-midgray">
        {currentPosts.map((post) => (
          <li key={post.id} className="px-4 py-3 flex items-center justify-between">
            <div className="flex-grow mr-4">
              <p className="text-lg font-medium truncate">{post.title}</p>
              <p className="text-sm text-midgray">{post.author}</p>
            </div>
            <p className="text-sm text-midgray">{post.date}</p>
          </li>
        ))}
      </ul>

      {/* 페이지 번호 */}
      {/* <div className="flex items-center justify-center mt-6"> */}

      <div className="flex justify-between">

      <div className="flex justify-start mt-6">
       <button
          className="px-4 py-2 mr-2 text-sm font-medium text-gray bg-blue-500 rounded hover:bg-blue-600 border border-gray"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>{'<'}</span> 이전
        </button>
      </div>

      
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 mx-1 text-sm rounded ${
              currentPage === index + 1
                ? 'text-black font-bold'
                : 'text-black hover:font-bold'
            }`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
        
      
      <div className="flex justify-end mt-6">
        <button
          className="px-4 py-2 ml-2 text-sm font-medium text-gray bg-blue-500 rounded hover:bg-blue-600 border border-gray"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음 <span>{'>'}</span>
        </button>
      </div>

      </div>
      
      
     </div> 
  );
};

export default Notice;
