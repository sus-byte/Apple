import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
	useGSAP(() => {
		gsap.to("#title", {
			scrollTrigger: {
				trigger: "#title",
				toggleActions: "restart none none none",
			},
			opacity: 1,
			y: 0,
		});
		gsap.to(".link", {
			scrollTrigger: {
				trigger: "#title",
				toggleActions: "restart none none none",
			},
			opacity: 1,
			y: 0,
			duration: 1,
			stagger: 0.25,
		});
	}, []);

	return (
		<section
			id="highlights"
			className="bg-zinc common-padding w-screen h-full overflow-hidden"
		>
			<div className="screen-max-width">
				<div className="w-full md:flex justify-between items-end mb-12">
					<h1 id="title" className="section-heading">
						Get the Highlights.
					</h1>

					<div className="flex flex-wrap gap-5 items-end">
						<p className="link">
							Watch the film
							<img src={watchImg} alt="watch" className="ml-2" />
						</p>
						<p className="link">
							Watch the event
							<img src={rightImg} alt="right" className="ml-2" />
						</p>
					</div>
				</div>

				<VideoCarousel />
			</div>
		</section>
	);
};

export default Highlights;
