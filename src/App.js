
// import { useState } from 'react';
// import './App.css';
// function App() {
//   const [task, setTask] = useState('')
//   const [todo, setTodo] =  useState([])
 
//   let globalID = 0

// function handleCreateTodo (event)  {
//   event.preventDefault()
//    setTodo(oldTodo => {
//     setTask('')
//     return [...oldTodo, { todo: task, id: globalID++   } ] 
//    })
// }

// function handleDeleteItem (itemID) {
//     const indexItems = todo.findIndex((item) => item.id === itemID)
//     if (indexItems !== -1 ) {
//       setTodo ((oldTodo) => {
//         const updateTodo = [...oldTodo]
//         updateTodo.splice(indexItems, 1)
//           return updateTodo
//       })
//     }
// }

//   return (
//     <div className="App">
//       <h1>Best To Do App Ever </h1>
//       <form onSubmit={handleCreateTodo}>
//         <input 
//           type="text"
//           value={task}
//           onChange={event =>{
//             setTask(event.target.value) 
//           }}
//         />
//         <button type='submit'>create ToDo</button>
//       </form>
//       <ul>
//         {
//           todo.map((item, index) =>{
//             return <div key={item.id}>
//               <li>{item.todo}</li> 
//               <button onClick={() => handleDeleteItem(item.id)}>Delete</button> 
//               </div>
             
//           })
//         }
//       </ul>
//     </div>
//   );
// }

// export default App;





// import MusicNoteIcon from './icons/MusicNote'

// export default function VideoFooter({ channel, description, song }) {
// 	return (
// 		<div className="footer-left">
// 			<div className="text">
// 				<h3>@{channel}</h3>
// 				<p>{description}</p>
// 				<div className="ticker">
// 					<MusicNoteIcon style={{ width: '30px' }} />
// 					<marquee direction="left" scrollamount="2">
// 						{song}
// 					</marquee>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }


// import React, { useState } from 'react'
// import FavoriteIcon from './icons/FavoriteIcon'
// import FavoriteBorderIcon from './icons/FavoriteIconBordered'
// import MessageIcon from './icons/Message'
// import ShareIcon from './icons/Share'
// import './FooterRight.css'

// function VideoSidebar({ likes, shares, messages }) {
// 	const [liked, setLiked] = useState(false)

// 	return (
// 		<div className="footer-right">
// 			<div className="sidebar-icon">
// 				{liked ? (
// 					<FavoriteIcon
// 						style={{ width: '40px', height: '40px' }}
// 						onClick={(e) => setLiked(false)}
// 					/>
// 				) : (
// 					<FavoriteBorderIcon
// 						style={{ width: '40px', height: '40px' }}
// 						onClick={(e) => setLiked(true)}
// 					/>
// 				)}
// 				<p>{liked ? likes + 1 : likes}</p>
// 			</div>
// 			<div className="sidebar-icon">
// 				<MessageIcon style={{ width: '40px', height: '40px' }} />
// 				<p>{messages}</p>
// 			</div>
// 			<div className="sidebar-icon record-below">
// 				<ShareIcon style={{ width: '40px', height: '40px' }} />
// 				<p>{shares}</p>
// 			</div>
// 			<div className="sidebar-icon record">
// 				<img src="https://static.thenounproject.com/png/934821-200.png" />
// 			</div>
// 		</div>
// 	)
// }

import React, { useState } from 'react'

export default function App() {
	// Define a state variable here to track question status
	const [currentIndex, setCurrentIndex] = useState(0)

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]

	function handleAnswerClick(isCorrect) {
		// Check if correct answer is pressed. (See the hint on the left)
        if(isCorrect === true){
			setScore((value) => value +1)
		}
		if (currentIndex === questions.length - 1) {
			// quiz over
			setQuizFinished(true)
		} else {
			setCurrentIndex((value) => value + 1)
		}
	}

	const [quizFinished, setQuizFinished] = useState(false)

	// Create a state variable here [score, setScore]
	const [score, setScore] = useState(0)

	return (
		<div className="app">
			{quizFinished ? (
				/* Change this hardcoded 1 to state variable score else */
				<div className="score-section">
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Question { currentIndex + 1 }</span>/{questions.length}
						</div>
						<div className="question-text">
							{questions[currentIndex].questionText}
						</div>
					</div>
					<div className="answer-section">
						{questions[currentIndex].answerOptions.map((answer) => {
							// Add onClick listener to this button
							return (
								<button
									onClick={() => handleAnswerClick(answer.isCorrect)}
									key={answer.answerText}
								>
									{answer.answerText}
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}

