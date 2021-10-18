import React, { MouseEventHandler } from 'react'

import "../css/Course.css"

type Teacher = {
  name: string,
  img?: string,
}

type CourseProps = {
  img: string,
  name: string,
  classes?: number,
  date: Date,
  teacher: Teacher,
  rating: number,
  level: string,
  addToFavorite: MouseEventHandler,
  addToPath: MouseEventHandler
}

export const Course = ({ 
  img, 
  name, 
  date, 
  teacher, 
  level, 
  rating,
  classes,
  addToFavorite,
  addToPath 
} : CourseProps) => {
  return (
    <div className="course">
      <div className="course--body">
        <div className="course-img">
          <img src={img} alt={name} />
        </div>
        <div className="course-name">
          <p>{name}</p>
        </div>
        <div className="course-teacher">
          <p>Por {teacher.name}</p>
          <div className="teacher-img">
            <img src={teacher.img} alt={teacher.name} />
          </div>
        </div>
      </div>
      <div className="course--footer">
        <div className="course--details">
          <div className="course-classes-level">
            <span className="course-classes">
              {classes} clases
            </span>
            <span className="course-level">
              Nivel {level}
            </span>
          </div>
          <div className="course-year-rating">
          <span className="course-rating">
            {
              "⭐".repeat(rating)
            }
          </span>
          <span className="course-year">
            {date?.getFullYear()}
          </span>
          </div>
        </div>
        <div className="course--buttons">
          <button className="button-blue" onClick={addToPath}  >+ Agregar a mis rutas</button>
          <button className="button-yellow" onClick={addToFavorite}  >⭐ Favorito</button>
        </div>
      </div>
    </div>
  )
}
