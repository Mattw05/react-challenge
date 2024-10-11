import Accordion from 'react-bootstrap/Accordion';

function Resume() {
  return (<>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        Matthew Weigandt
4485 n Steel rd
Hemlock, MI 48722
989-326-3916
weigandtmatthew@yahoo.com
october 10, 2024
I'm applying for a position at your company. Based on the posted description, I'm confident that I am fully
qualified for the position and will be a strong addition to your team. I would appreciate a job interview at
your earliest convenience. Please find my resume attached.
I can be reached at the number above or at my email address.
Sincerely,
Matthew Weigandt
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Matthew Weigandt
4485 n Steel rd Hemlock, MI 48722
989-326-3916 • weigandtmatthew@yahoo.com

Objective
I have 8+ years of manufacturing experience and I would like to contribute my knowledge to help your
company grow.
Key Qualifications
 Multitask running multiple machines at once
 Set up and run HAAS mills.
 Set up and run 4th and 5th axis work
 Read blueprints/ GD&T
Experience
Orchid Orthopedic Solutions
Machinist
 Effective and Efficient job set up
 Ran HAAS mills
 Verified finished jobs to FDA standards
 Set up and ran jobs on 4th and 5th axis
Great Lakes Englinton
Machinist
 Surface grinder
 OD grinder
 ID grinder
 Hone
Zero Tolerance
Machinist
 HAAS mill
 Bridgeport Prototrak
Education
High School Diploma
Bridgeport High School
References
Anthony Wasney- 989-890-7988
Ken Publow- 989-313-1765
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
         Copy from actual resume
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>);
}

export default Resume;