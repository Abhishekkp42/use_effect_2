import { useEffect, useState } from "react"

export const Timer= () => {

	const [timer, setTimer] = useState(0)

	useEffect(() => {
		const x= setInterval(() => {
			console.log("Interval", timer)
			setTimer((prev) => {
				if(prev>=9)
				{
					clearInterval(x);
					return 10;
				}
				return prev+1;
			})
		}, 1000);
	}, [])

	return (
		<div>
			Timer: {timer}
		</div>
	)
}