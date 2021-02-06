import './css/App.css'
import './css/style.css';
import './css/style2.css';
import './css/style3.css';
import './css/style4.css';
import './css/mobile.css';
import './css/modal.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthProvider from './../context/AuthContext'
import Home from './pages/Home'
import Signup from './auth/Signup';
import UserHome from './user/Home'
import AdminHome from './admin/Home'
import Courses from './admin/pages/Courses'
import CoursesUpload from './admin/pages/CourseUpload'
import Login from './auth/Login'
import Adverts from './admin/pages/Adverts'
import RichTextBox from './util/RIchText'
import AdminBlogPanel from './admin/pages/Blog'
import AddBlogArticle from './admin/pages/AddBlogArticle.js'
import PrivateRoute from './util/PrivateRoute'
import AddCourseItem from './admin/pages/AddCourseItem'


class App extends Component{
  render(){
    return (
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path='/user' component={UserHome} />
            <PrivateRoute path='/admin' component={AdminHome} />
            <PrivateRoute path="/admincourses" component={Courses} />
            <PrivateRoute path="/admincourseUpload" component={CoursesUpload} />
            <PrivateRoute path="/adminAdvert" component={Adverts} />
            <PrivateRoute path="/adminBlogPanel" component={AdminBlogPanel} />
            <PrivateRoute path="/adminAddBlogArticle" component={AddBlogArticle} />
            <PrivateRoute path="/adminAddCourseItem/:id" component={AddCourseItem} />
            <PrivateRoute path='/richtext' component={RichTextBox} />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

export default App;


