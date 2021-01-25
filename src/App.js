import React, { Component } from 'react'
import Card from './component/Card';import Carousel from './component/Carousel';
import Checkbox from './component/Checkbox';
import Radio from './component/Radio';
import Textarea from './component/Textarea';
 {/* ngambil component card */}

 class App extends Component {
  render() {
    return (
        <div>
          <label>Siapa penemu alat baling-baling bambu ?</label>
        <Radio title="Doraemon"/>
        <Radio title="Albert Einsten"/>
        <Radio title="Steave Rogers"/>
        <Radio title="Stephan Hawking"/>
        <label>Pilih 3 jawaban yang benar tentang Luffy</label>
        <Checkbox title="diPanggil Mugiwara"/>
        <Checkbox title="Captain dari tim Mugiwara"/>
        <Checkbox title="Manusia karet"/>
        <Checkbox title="Temen naruto"/>
        <Textarea title="Ceritakan pengalaman terbaikmu bersama mantanmu"></Textarea>
      
        
        

        </div>
    )
  }
}
export default App;
