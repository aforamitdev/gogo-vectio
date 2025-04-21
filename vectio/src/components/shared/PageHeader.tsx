
type Props = {
	title: string;
	details: string

}

const PageHeader = (props: Props) => {
	return (
		<div>
			<h1 className="scroll-m-20 text-1xl font-extrabold  lg:text-3xl pt-6">
				{props.title}
			</h1>
			<p className="text-gray-600 ">
				{props.details}
			</p>

		</div>
	)
}

export default PageHeader