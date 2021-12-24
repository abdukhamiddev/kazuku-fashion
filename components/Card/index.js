/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Card = ({ HREF, SRC, ALT, engCL, jpCL, YEAR, AS }) => {
	return (
		<>
			<Link href={HREF} as={AS}>
				<a>
					<div>
						<img src={SRC} alt={ALT} />
						<div>
							<div>
								<h6>
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