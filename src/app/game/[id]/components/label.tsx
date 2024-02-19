interface LabelProps {
  name: string
}

const Label = ({name}: LabelProps) => {
  return (
    <div className="flex flex-grow py-2 px-4 bg-white font-medium hover:shadow-light transition-all duration-200 cursor-default rounded-md sm:flex-grow-0 text-main-blue">
      {name}
    </div>
  )
}

export default Label