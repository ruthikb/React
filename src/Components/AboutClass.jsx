class AboutClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="about-page">
                    <h1>About Us</h1>
                    <p>{this.props.about}</p>
                    <p>{this.props.discription}</p>
                </div>
            </div>

        );
    }
}
