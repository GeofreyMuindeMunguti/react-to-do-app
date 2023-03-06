import { Component } from "react"

class Form extends Component {
    initialState = {
        action: ''
    }
    constructor(props){
        super(props)
        this.state = this.initialState    
    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({[name]: value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }


    render() {
        const { action } = this.state;

        return (
        <div className="min-h-screen bg-gray-100 flex items-center m-10">
        <form onSubmit={this.onFormSubmit} className="ml-10">
        <div class="text-sm flex flex-col">
            <label htmlFor="action" className="mr-4 text-gray-700 font-bold inline-block mb-2">Add Action</label>
            <textarea
            className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
            type="text"
            name="action"
            id="action"
            value={action}
            onChange={this.handleChange}
            ></textarea>
            <button type="submit" className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">
                    Submit
                </button>
        </div>
        </form>
        </div>
    )
    }
}

export default Form