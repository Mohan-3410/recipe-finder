import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full mt-10">
      <div className="flex items-center justify-center w-16 h-16  border-t-4 border-t-primary  rounded-full animate-spin">
        <div className="flex items-center justify-center w-12 h-12  border-r-4 border-r-primary  rounded-full ">
          <div className="w-8 h-8  border-b-4 border-b-primary  rounded-full ">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
