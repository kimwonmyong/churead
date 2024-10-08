import React, { useState } from 'react';

const PostInput = ({ onChange }) => {
  const [value, setValue] = useState('');

  const hanldeChange = (event) => {
    const { value } = event.target;
    setValue(value);
    onChange(value);
  };

  return (
    <div className="px-6 border-t border-churead-gray-300 border-opacity-15 pt-3">
      <div className="flex items-start gap-3">
        {/* 프로필 이미지 영역 */}
        <div className="w-10 rounded-full overflow-hidden mt-1">
          <img src="./images/chutzrit.svg" alt="chutzrit" />
        </div>
        {/* 프로필 이미지 영역 끝 */}
        {/* 콘텐츠 영역 */}
        <div className="w-full">
          <div className="flex items-center">
            <span className="font-bold">chutzrit</span>
          </div>
          <div className="pt-1 text-sm">
            <textarea
              rows={4}
              placeholder="문구를 작성하세요."
              className="w-full placeholder-churead-gray-300 placeholder-opacity-60 text-churead-gray-400 bg-transparent outline-none resize-none"
              onChange={hanldeChange}
              value={value}
            />
          </div>
        </div>
        {/* 콘텐츠 영역 끝 */}
      </div>
    </div>
  );
};

export default PostInput;
