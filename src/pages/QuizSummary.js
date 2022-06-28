
import { useLocation } from 'react-router-dom';




const QuizSummary = () => {

    const location = useLocation()

    return !location.state ? (
        <h1>Forbiden</h1>
    ) : (
        <div className='mt-3 container'>
            <h1 className='text-center mb-3' style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                Quiz Summary Score :
                <div className='text-success'> {location.state.score.correct}</div> -
                <div className='text-danger'>{location.state.score.false}</div>
            </h1>
            {location.state.quiz.map((item, index) => (
                <div className='card mb-3'>
                    <div className="card-header bg-white"><div className='fw-bold'>No {index + 1}</div>  {item.question}</div>
                    <div className="card-body">
                        {item.options.map((item, index) => (
                            <div style={{
                                display: "flex",
                                justifyItems: "center",
                                alignItems: "center"
                            }}
                                key={index}
                            >
                                <div style={{
                                    height: 20,
                                    width: 20,
                                    borderRadius: 100,
                                    backgroundColor: item?.selected ? "greenYellow" : "grey",
                                    cursor: "pointer",
                                    marginRight: 5,

                                }}

                                />
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className="card-footer">
                        {item.options.find(
                            (option) => option.correct && option.selected === option.correct
                        ) ? (
                            <div className="text-success">
                                Your Answer : {item.options.find(item => item.correct).title}
                            </div>
                        ) : (
                            <>
                                <div className='text-danger'>
                                    Your Anwer: {
                                        item.options.find(item => item.selected)?.title ?? "You dont answer this quetions"
                                    }
                                </div>
                                <div className='text-success'>
                                    Correst answer Is {item.options.find(item => item.correct).title}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default QuizSummary