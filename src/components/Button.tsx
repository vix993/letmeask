interface ButtonProps {
	text?: string;
	children?: string;
}

export const Button = (props: ButtonProps) => {
	return (
		<div>
			<button>
				{props.text || "Default"}
			</button>
			{props.children}
		</div>
	)
}