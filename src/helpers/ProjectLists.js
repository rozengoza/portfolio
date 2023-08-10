import FaceRecog from '../assests/face.jpg'
import SmartParking from '../assests/parking.jpg'
import BloodDonor from '../assests/bloodDonor.png'
import SajiloSwasthyaSewa from '../assests/sajiloSwasthya.png'
import FloralNepal from '../assests/floralNepal.png'
// import FaceRecogBlockD from 
// import SwasthyaSewaBlockD from '../assests/swasthyaSewaBD.png'

export const ProjectList =[
    {
        name: "Automatic Face Recognition Based Attendance System",
        image : FaceRecog,
        techStack : "RetinaFace,FaceNet,SVM,Python,Flask,HTML,CSS",
        githubLink : "https://github.com/rozengoza/Automatic-Face-Recognition-Based-Attendance-System",
        aboutProject : "A face recogntion model has been trained through transfer learning from FaceNet Keras Model and a classificaiton layer has been added to the last layer of pre-trained model, so that the newly trained model can detect and recognize faces of students of my class. We've developed a web application using Flask Python with Jinja Template and used HTML/CSS for frontend. This web application allows takinng attendance through photo upload and live camera capture, detects the faces of students in the image frame and therefore updates the attendance of students that have been recognized. To implement void attendance with images with no faces, we have implemented HaarCascade Image Detection Algorithm which allows to capture images if and only if atleast one face is detected within the frame. On the backend side, We have implemented RetinaFace face detection algorithm for its powerful facedetection ability. We have trained the FaceRecognition model with a wide range of original datasets that were augmented under various parameters to recognize faces even in drastic environmental conditions with acceptable accuracy. The accuracy of the detection is acceptably high even during varying lighting conditions and level of blurness.",
        blockDiagramImage :"",
    },
    {
        name: "Smart Parking Management System",
        image: SmartParking,
        techStack:"OpenCV,Python,Firebase,Java,KNN",
        githubLink : "",
        aboutProject : "We have developed a complete Parking Management System that uses object detection to detect the occupancy status of parking slots monitored through CCTV camera and uploads this data to real-time database. Using this data, through our system integrated Andorid Applicaiton, we can check the occupancy status of parking slots in real time and book the empty ones. We have also trained a KNN Classifer to detect and extract the number plates of entering vehicles and exiting vehicles in our parking location terminal which further allows us to acces their parking and billing details.",
        blockDiagramImage:"",
    },
    {
        name: "Online Blood Donor Finder Mobile Application",
        image: BloodDonor,
        techStack:"Java,Firebase,XML",
        githubLink : "",
        aboutProject:"Here, we have tried to simplify search for blood during the time of need. Basically, this is a mobile application that allows us to register as a blood donor upon passing eligibility test and on default, register as a blood requester. In the profile section, a register donor can toggle a button to mark themselves as available or unavailable. When a blood requester seeks for blood donors, a list of possible donors of certain blood group and currently within a radius of 10Km range is displayed. Here, live location of the users connected to Internet is accessed through user permissions and Haversine Formula is used to calcutate the distance between the probable donors and the requester. Requests and response are sent between seeker and donors through app notification. ",
        blockDiagramImage:"",
    },
    {
        name: "Sajilo Swasthya Sewa - An Online Patient Registration Web Application",
        image: SajiloSwasthyaSewa,
        techStack:"Next.Js,Node.Js,MongoDB",
        githubLink : "https://github.com/rozengoza/Online-Patient-Registration-System-",
        aboutProject : "This Web Application is an approach to simplify tiresome and lengthy procedure of registering an appointment in most of the public, governmental and community run hospitals in the country. This application allows two user logins, one as Hopital Representative Admins who verifies and responds to patient registration requests, and another as a patient, who can book an appointment for themselves stating their problems and in the respective department. The problem statement of this Project as I visuaulized myself was here in Nepal, in most of the non-privatized hospitals, where footfalls is relatively a higher number, there is relatively a larger waiting time for service. This project seeks to deduct the waiting time as Patients will be able to visit the hospital only when their appointments have been scheduled to. This application also allows to better manage the medical history of registered patients.",
        blockDiagramImage:"",
    },
    {
        name: "Floral Nepal - An Ecommerce Website to Buy Plants",
        image: FloralNepal,
        techStack:"HTML,CSS,Javascript",
        githubLink : "https://github.com/rozengoza/Floral-Nepal-Buy-plants-easily-Ecommerce-",
        aboutProject: "A simple e-commerce website where the admin acts as a vendor and adds the plants for sale.",
        blockDiagramImage:"",
    },
]