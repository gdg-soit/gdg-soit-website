import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
        <DotLottieReact
            className="h-52 w-52"
      src="https://assets1.lottiefiles.com/packages/lf20_heoa8x46.json"
      loop
      autoplay
    />
    </div>
  );
};



