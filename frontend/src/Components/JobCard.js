import React,{ Component } from 'react';
import './JobCard.css';

class JobCard extends Component{
	render(){
		return(
            <>
                <div type="button" className="card">
                    <div className="card-header">
                        {this.props.jobrole}
                    </div>

                    <div className='flip-card card-body'>
                        <div className='flip-card-inner'>
                
                            <div className='flip-card-front'>
                                {this.props.description}
                            </div>

                            <div className='flip-card-back'>
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