import { useRouter } from "next/router";
import React from "react";

const SingleCollection = () => {
	const { query } = useRouter();
	return (
		<div>
			<h1 className="text-[#cfcfcf]">Hi {query.id}</h1>
		</div>
	);
};

export default SingleCollection;
