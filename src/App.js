import React from 'react'
import './App.css';
import Layout from "./components/layout/Layout/Layout"
import SannouncementCard from './components/cards/School Anouncement/SannouncementCard'
import SchoolAnnouncementFeed from './components/cards/School Anouncement/SchoolAnnouncementFeed'
import ClassAnnouncementFeed from './components/cards/Class Anouncement/ClassAnnouncementFeed'
import Subjective from './components/Teacher/QuestionSetter/Subjective/Subjective'
const card_data = [{
  date:'2 days ago',
  tag:'Holiday',
  title:'No Holiday on christmas!',
  discription:'No holiday will be provide on 20 december because we are not giving it!',
  by:'Principal'
},
{
  date:'2 days ago',
  tag:'Holiday',
  title:'No Holiday on christmas!',
  discription:'No holiday will be provide on 20 december because we are not giving it!',
  by:'Principal'
},{
  date:'2 days ago',
  tag:'Holiday',
  title:'No Holiday on christmas!',
  discription:'No holiday will be provide on 20 december because we are not giving it!',
  by:'Principal'
},{
  date:'2 days ago',
  tag:'Holiday',
  title:'No Holiday on christmas!',
  discription:'No holiday will be provide on 20 december because we are not chrsitans',
  by:'Principal'
}]

function App() {
  return (
    <div className="App pb-8">
      <Layout>
        <div className='grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2'>
        <div className='pl-6 pr-3 mt-10'>
        <SchoolAnnouncementFeed>
            {card_data.map((obj,index) => {
              return (
                <SannouncementCard key={index} date={obj.date} tag={obj.tag} title={obj.title} discription={obj.discription} by={obj.by}  />
              )
            })}
          </SchoolAnnouncementFeed>
        </div>
        <div className='pr-6 pl-3 mt-10'>
        <ClassAnnouncementFeed>
            {card_data.map((obj,index) => {
              return (
                <SannouncementCard key={index} date={obj.date} tag={obj.tag} title={obj.title} discription={obj.discription} by={obj.by}  />
              )
            })}
          </ClassAnnouncementFeed>
        </div>
      </div>
      {/* <hr className='my-2'/> */}
        <Subjective/>
      </Layout>
    </div>
  );
}

export default App;
