import Accordion from 'react-bootstrap/Accordion';

function Resume() {
  return (<>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Summary</Accordion.Header>
        <Accordion.Body>
        
I'm applying for a position at your company. Based on the posted description, I'm confident that I am fully
qualified for the position and will be a strong addition to your team. I recently completed a 6 month web development coding bootcamp through MSU and received 
my fullstack web development certificate
I would love a job interview at
your earliest convenience. 

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Work History</Accordion.Header>
        <Accordion.Body>

I have 15 years of manufacturing experience and I would like to contribute my knowledge to help your
company grow.

Key Qualifications
 Multitask running multiple machines at once and
 Set up and run HAAS mills.
 Set up and run 4th and 5th axis work, able to 
 Read blueprints using GD&T.

Experience:

"Orchid Orthopedic Solutions"
Machinist
 Effective and Efficient job set up,
 on HAAS mills.
 Verified finished jobs to FDA standards.
 Set up and ran jobs on 4th and 5th axis mills.

"Great Lakes Englinton"
Machinist
 Surface grinder
 OD grinder
 ID grinder
 Hone

"Zero Tolerance"
Machinist
 HAAS mill and 
 Bridgeport Prototrak.

 Currently working at Merrill tool/Keel. job description is running and maintaining CNC floor Mills. Editing programs as needed using Heidenheim controls 
 on FPT 5 axis floor mills.
"Education"
High School Diploma
Bridgeport High School
References
Anthony Wasney- 989-890-7988
Marcus Ramirez- 214-284-7948
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>);
}

export default Resume;