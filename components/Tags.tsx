"use client"

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '@/app/globals.css';

// import required modules
import { FreeMode } from 'swiper/modules';
import AddTag from './AddTag';

export default function Tags() {
	return (
		<div className="relative gap-4 border-border my-5 bg-slate-100 py-3 px-5 rounded-md w-[850px]">
			<div className="overflow-x-auto w-[800px]">
				<Swiper spaceBetween={10} freeMode={true} modules={[FreeMode]} className="mySwiper" grabCursor={true} slidesPerView="auto">
					<SwiperSlide className="text-white bg-blue-500">All</SwiperSlide>
					{Array.from({ length: 10 }).map((_, idx) => (
						<SwiperSlide key={idx} className="text-black">
							Tag {idx + 1}
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<AddTag />
		</div>
	);
}
