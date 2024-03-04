interface Props{
    title: string;
    variant: "text-4xl" | "text-3xl"
}
const Heading = ({title, variant}: Props) =>{
    return(
        <h1 className={`${}`}>{title}</h1>
    )
}