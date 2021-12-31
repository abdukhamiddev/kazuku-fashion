/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Card = ({ HREF, SRC, ALT, engCL, jpCL, YEAR, AS }) => {
	return (
		<>
			<Link href={HREF} as={AS}>
				<a className="card">
					<div className="card__img">
						<img src={SRC} alt={ALT} className="" />
						<div className="card__tags">
							<div className="card__tags-line">
								<h6 className="">
									{engCL}/ <span>{jpCL}</span>
								</h6>
								<div className="card__tags-time">{YEAR}</div>
							</div>
						</div>
					</div>
				</a>
			</Link>
		</>
	);
};
export default Card;
