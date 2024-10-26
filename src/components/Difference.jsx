import { differenceImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { FaPlus } from "react-icons/fa6";
import gsap from "gsap";

const Difference = () => {
	useGSAP(() => {
		animateWithGsap(".d__text", {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: "power1.inOut",
		});

		animateWithGsap("#popup", {
			scale: 1,
			opacity: 1,
			duration: 1,
			ease: "power3.inOut",
		});
		animateWithGsap("#popup", {
			width: "350px", // Set desired width for wider shape
			height: "64px", // Keep height smaller for an ellipse effect
			borderRadius: "32px",
			duration: 1,
			delay: 0.7,
			ease: "power4.inOut",
		});
		animateWithGsap("#popup_text", {
			delay: 1.5,
			opacity: 1,
			duration: 1,
			ease: "power1.inOut"
		})
	}, []);

	return (
		<section className="common-padding">
			<div className="screen-max-width bg-zinc md:px-32 px-14 pt-28 pb-10">
				<div className="mb-5">
					<img src={differenceImg} alt="iphone" />
				</div>

				<h2 className="lg:text-6xl md:text-5xl text-3xl font-medium">
					Designed to
					<br />
					make a difference.
				</h2>

				<div className="bg-gray h-[1px] w-full my-12" />

				<div className="flex md:flex-row flex-col justify-between items-start gap-24">
					<div className="flex-1 flex-center">
						<p className="text-gray text-xl font-normal md:font-semibold translate-y-10 opacity-0 d__text">
							<span className="text-white">
								What matters to you matters to Apple, too.{" "}
							</span>
							From privacy protections that give you more control over your
							data. To using more recycled materials that minimize environmental
							impact. To creating built‑in features that make iPhone accessible
							to all.
						</p>
					</div>

					<div className="flex-1 flex items-start flex-col">
						<p className="text-gray text-xl font-normal md:font-semibold mb-2 translate-y-10 opacity-0 d__text">
							The internal structural frame of iPhone 15 Pro has
						</p>
						<p className="text-white font-bold text-4xl translate-y-10 opacity-0 d__text">
							100% recycled aluminum
						</p>
					</div>
				</div>

				<div
					id="popup"
					className="bg-neutral-800 mt-14 rounded-full w-16 h-16 mx-auto relative scale-0 opacity-0"
				>
					<div id="popup_text" className="absolute left-10 top-4 text-xl font-semibold opacity-0">
						What iPhone stands for?
					</div>
					<div className="absolute top-1 right-1 bg-blue w-14 h-14 rounded-full flex-center ">
						<FaPlus size={22} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Difference;
