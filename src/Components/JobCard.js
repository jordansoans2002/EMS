import React,{ Component } from 'react';
import './JobCard.css';

class JobCard extends Component{

    setModalShow() {
        alert('clicked');
    }
	render(){
		return(
            <>
                <header>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
                </header>
                <div type="button" class="card">
                    <div class="card-header">
                        {this.props.jobrole}
                    </div>

                    <div class='flip-card card-body'>
                        <div class='flip-card-inner'>
                
                            <div class='flip-card-front'>
                                {this.props.description}
                            </div>

                            <div class='flip-card-back'>
                                Qualifications: {this.props.qualifications}<br></br>
                                Exam duration: {this.props.duration}<br></br>
                                Paper pattern: {this.props.pattern}
                            </div>
                        </div>
                    </div>
                </div>
            </>
		);
	}
}
export default JobCard

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<>
// 	<JobCard jobrole='Job Role' description='Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' qualifications='Qualifications required' duration='1 hour' pattern='mcq'/>
// 		</>);