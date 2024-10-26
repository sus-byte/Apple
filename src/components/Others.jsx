import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { significantOthers } from "../constants";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useRef, useState } from "react";
import gsap from "gsap";

const Others = () => {
	const [activeIndex, setActiveIndex] = useState(2);

	const contentRefs = useRef([]);
	const imageRefs = useRef([]);

	const handleToggle = (index) => {
		if (index !== activeIndex) {
			// close accordion
			gsap.to(
				contentRefs.current[activeIndex].querySelector(".accordion_details"),
				{ height: 0, duration: 1, ease: "power1.inOut" }
			);
			gsap.fromTo(
				imageRefs.current[activeIndex].querySelector(".accordion_image"),
				{ opacity: 0, scale: 0.98 },
				{ opacity: 1, scale: 1, duration: 1, delay: 0.3 }
			);
			setActiveIndex(index);

			//open accordion
			gsap.fromTo(
				contentRefs.current[index].querySelector(".accordion_details"),
				{ height: 0 },
				{ height: "auto", duration: 1, ease: "power1.inOut" }
			);
		}
	};

	useGSAP(() => {
		animateWithGsap("#others_title", { y: 0, opacity: 1 });
	}, []);

	return (
		<section className="bg-zinc h-full relative common-padding">
			<div className="mx-5">
				<div className="mb-12 w-full">
					<h1 className="section-heading" id="others_title">
						Significant others.
					</h1>
				</div>

				<div className="w-full bg-black h-full rounded-3xl p-14">
					<div className="flex flex-col lg:flex-row">
						<div className="w-full lg:w-[40%]">
							{significantOthers.map((item, index) => (
								<div
									ref={(el) => (contentRefs.current[index] = el)}
									key={item.id}
									className={`${
										index !== significantOthers.length - 1
											? "border-b border-gray"
											: ""
									} `}
								>
									<button
										className="w-full p-4"
										onClick={() => handleToggle(index)}
									>
										<div className="flex gap-5 justify-between items-center">
											<span className="text-3xl font-semibold text-left">
												{item.title}
											</span>
											{index === activeIndex ? (
												<IoIosArrowUp size={25} />
											) : (
												<IoIosArrowDown size={25} />
											)}
										</div>
									</button>

									<div
										className={`${
											activeIndex === index ? "h-auto" : "h-0"
										} overflow-hidden accordion_details`}
									>
										<p className="p-4 pb-8 text-left lg:mr-10 text-gray">
											{item.text}
										</p>

										<div className="w-full lg:hidden block mb-10">
											<img src={item.img} alt={item.title} />
										</div>
									</div>
								</div>
							))}
						</div>

						<div
							className="w-full ml-20 lg:w-[60%]  justify-center hidden lg:flex"
							ref={(el) => (imageRefs.current[activeIndex] = el)}
						>
							<img
								className="accordion_image"
								src={significantOthers[activeIndex].img}
								alt={significantOthers[activeIndex].title}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Others;
