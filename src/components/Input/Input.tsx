interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    title: 'username' | 'password' | 'confirm password'
    variant: 'text' | 'password'
}

const Input = ({ title, variant, ...props }: InputProps) => {
    return (
        <>
            <p className="capitalize">{title}:</p>
            <input
                type={variant}
                className="border-b border-black outline-none "
                {...props}
            />
        </>
    )
}

export default Input
