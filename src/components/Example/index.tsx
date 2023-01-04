export interface ExampleProps {
  title: string
}

export const Example = ({ title }: ExampleProps) => {
  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-lg">{title}</h1>
    </div>
  )
}
