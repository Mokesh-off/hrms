import React ,{ Component} from 'react'
import Header from '../../Header/Header';
import SideNav from '../../SideNav/SideNav';
import LeavePlan from './LeavePlan';
import Footer from '../../Footer/Footer';

export default class HolidayIndex extends Component {
    render(){
        return(
            <div>
                <Header/>
                <SideNav/>
                <LeavePlan/>
                <Footer/>
            </div>
        );
    }
}