const SpanText = ({ text, spanClassName }) => {
	let formatted = [...text];

	return (
		<>
			{formatted.map((symbol, i) => {
				return (
					<span
						key={i}
						className={spanClassName !== undefined ? spanClassName : ""}
					>
						{symbol}
					</span>
				);
			})}
		</>
	);
};

export default SpanText;
