/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Card = ({ HREF, SRC, ALT, engCL, jpCL, YEAR, AS }) => {
	return (
		<>
			<Link href={HREF} as={AS}>
				<a className="">
					<div className="">
						<img src={SRC} alt={ALT} className="" />
						<div className="">
							<div className="">
								<h6 className="">
									{engCL}/ <span>{jpCL}</span>
								</h6>
								<div>{YEAR}</div>
							</div>
						</div>
					</div>
				</a>
			</Link>
		</>
	);
};
export default Card;
