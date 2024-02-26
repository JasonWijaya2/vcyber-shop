interface Props {
    title: string;
    description: string;
    btnText: string;
}

const HeaderText = ({title, description, btnText} : Props) => {
  return (
    <div className="absolute top-60 left-10 flex flex-col gap-10 text-black">
        <h1 className="font-bold text-[68px]">{title}</h1>
        <p className="text-[150%] leading-5">{description}</p>
        <button className="btn">
            <span className="btn__content font-bold">{btnText}</span>
            <span className="btn__glitch"></span>
        </button>
    </div>
  )
}

export default HeaderText