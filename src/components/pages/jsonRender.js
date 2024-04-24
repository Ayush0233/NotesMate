import React, { useState, useEffect, useRef } from 'react';
import jsonData from '../jsonfiles/bca.json'; // Import JSON file
import './jsonRender.css'
// import Subjectbox from './subjectbox';

const JSONRenderer = () => {
    const [data, setData] = useState([]);
    const dataRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Load the data when it enters the viewport
                    setData(jsonData);
                    observer.unobserve(dataRef.current);
                }
            });
        });

        if (dataRef.current) {
            observer.observe(dataRef.current);
        }

        return () => {
            if (dataRef.current) {
                observer.unobserve(dataRef.current);
            }
        };
    }, []);

    return <div ref={dataRef}>{data.length > 0 && <JSONContent data={data} />}</div>;
};

const JSONContent = ({ data }) => (
    <div>
        {data.map((course, index) => (
            <div key={index}>
                {Object.keys(course).map((courseName) => (
                    <div key={courseName}>
                        {/* <h2>{courseName}</h2> */}
                        {course[courseName].map((semester, index) => (
                            <div key={index}>
                                {Object.keys(semester).map((semesterName) => (
                                    <div key={semesterName} className='sem'>
                                        <h3>{semesterName}</h3>
                                        {semester[semesterName].map((subject, index) => (
                                            <div key={index}>
                                                {Object.keys(subject).map((subjectName) => (
                                                    <div key={subjectName} className='subjectname'>
                                                        <h4 className='text-center '>{subjectName}</h4>
                                                        <div className="subjectCol">
                                                            <div className="subjectList subjectSection">
                                                                {subject[subjectName].map((unit, index) => (
                                                                    <div key={index} className='Subject'>
                                                                        <div className="txtlink  ">
                                                                            <h5 className="card-title">{unit.title}</h5>
                                                                            <button className='pdfButton'> <a href={unit.gdrivelink} target='_blank' rel="noreferrer">Show</a></button>
                                                                        </div>
                                                                    </div>

                                                                ))}
                                                            </div>

                                                            <div className="youtubelink subjectSection">
                                                                {subject[subjectName].map((unit, index) => (
                                                                    <div key={index} className='Subject'>
                                                                        {unit.youtubelink && (
                                                                            <iframe width="550" height="400" src={`https://www.youtube.com/embed/videoseries?si=ZyGPU3qHGk4z67v5&amp;list=${unit.youtubelink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" > </iframe>
                                                                        )}
                                                                    </div>
                                                                ))}


                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        ))}
    </div>
);

export default JSONRenderer;





// import React from 'react';
// import bcajsonData from '../jsonfiles/bca.json'; // Import JSON file
// import './jsonRender.css'
// import { pdfjs } from 'react-pdf';
// // import PdfComp from './pdfComp';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();

// class JSONRenderer extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//         };
//     }

//     componentDidMount() {
//         // Set the imported JSON data in the component state
//         this.setState({ data: bcajsonData });
//     }
//     // const [pdflink, setpdflink] = useState()

//     render() {
//         return (
//             <div>
//                 {this.state.data.map((course, index) => (
//                     <div key={index}>
//                         {Object.keys(course).map((courseName) => (
//                             <div key={courseName}>
//                                 {/* <h2>{courseName}</h2> */}
//                                 {course[courseName].map((semester, index) => (
//                                     <div key={index}>
//                                         {Object.keys(semester).map((semesterName) => (
//                                             <div key={semesterName} className='sem'>
//                                                 <h2>{semesterName}</h2>
//                                                 {semester[semesterName].map((subject, index) => (
//                                                     <div key={index} className='SubjectOuter'>
//                                                         {Object.keys(subject).map((subjectName) => (
//  <div key={subjectName} className='subjectname'>
//     <h4 className='text-center '>{subjectName}</h4>
//     <div className="subjectCol">
//         <div className="subjectList subjectSection">
//             {subject[subjectName].map((unit, index) => (
//                 <div key={index} className='Subject'>
//                     <div className="txtlink  ">
//                         <h5 className="card-title">{unit.title}</h5>
//                         <button className='pdfButton'> <a href={unit.gdrivelink} target='_blank' rel="noreferrer">Show</a></button>
//                     </div>
//                 </div>
//                 // <div key={chapter} className=''>
//                 //     {Object.keys(chapter).map((chapterName)=>(
//                 //         <div>
//                 //             {chapter[chapterName].map((unit,index) =>(
//                 //                 <div key={index} className='Subject'>
//                 //                     <div className="txtlink  ">
//                 //                         <h5 className="card-title">{unit.title}</h5>
//                 //                         <button className='pdfButton'> <a href={unit.link} target='_blank' rel="noreferrer">Show</a></button>
//                 //                     </div>

//                 //                 </div>
//                 //             )) }
//                 //         </div>
//                 //     ))}

//                 // </div>
//             ))}
//         </div>
//         {/* //  <PdfComp />
//         //  <div className="shower subjectSection"></div> */}
//         <div className="youtubelink subjectSection">
//             {subject[subjectName].map((unit, index) => (
//                 <div key={index} className='Subject'>
//                     {unit.ylink && (
//                         <iframe width="550" height="400" src={`https://www.youtube.com/embed/videoseries?si=ZyGPU3qHGk4z67v5&amp;list=${unit.ylink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" > </iframe>
//                     )}
//                 </div>
//             ))}


//         </div>
//     </div>
// </div>
// ))}
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 ))}





//             </div>
//         );
//     }
// }



// export default JSONRenderer


