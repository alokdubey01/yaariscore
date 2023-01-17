import React from 'react'
import { Card } from '../components/Store/Card'
import { Corousel } from '../components/Store/Corousel'
import cube  from "../static/2048.png";

export const Store = () => {
  return (
    <div className='store'>
    <div className='mt-12 z-20 relative'>
    <Corousel/>
    <div className='md:p-4 mt-12 mx-auto items-center justify-center'>
      <div className='flex flex-wrap gap-12 mt-12'>
      <Card link="/games/cube" name="Cube" author="@johndoesurname" img={cube}/>
      <Card link="/games/2048" name="2048" author="@johndoesurname" img={cube}/>
      <Card link="/games/car" name="The Car" author="@johndoesurname" img={cube}/>
      <Card link="/games/Tower" name="Tower Build" author="@johndoesurname" img={cube}/>
      <Card link="/games/maze" name="The Maze" author="@johndoesurname" img={cube}/>
      <Card link="/games/pong" name="Ping Pong" author="@johndoesurname" img={cube}/>
      <Card link="/games/tetris" name="Tetris" author="@johndoesurname" img={cube}/>
      </div>
    </div>
    </div>
</div>
  )
}
