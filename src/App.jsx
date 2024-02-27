import React, { Component } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import History from './components/history/History'
import Section from './components/section/Section'
import Reg from './components/reg-list/Reg'
import Info from './components/info/Info'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <Hero/>
        <History/>
        <Footer/>
        <Section/>
        <Reg/>
        <Info/>
      </div>
    )
  }
}
