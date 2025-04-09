const Button = ({ title, onClick }) => {
    return (
        <button
            style={{
                outline: 'none',
                border: 'none'
            }}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
export default Button
// properties (props)

// Component-i cagiranda (call, invoke) ona verilen argument-ler


// Header (component-i yaradin. ) -> heading, variant(font-size)
