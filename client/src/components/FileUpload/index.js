import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyC9sJ8GtsGTdC_wZ__CqZX29G03Gah-ns8",
    authDomain: "alvonline.firebaseapp.com",
    databaseURL: "https://alvonline.firebaseio.com",
    projectId: "alvonline",
    storageBucket: "alvonline.appspot.com",
    messagingSenderId: "858746985142"
})

class FileUpload extends Component {
    constructor () {
        super()
        this.state = {
        uploadValue: 0
        }
    }

    handleOnChange (event) {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`pictures/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
            uploadValue: percentage
            })
        }, (error) => {
            console.error(error.message)
        }, () => {
        // Upload complete
        this.setState({
            picture: task.snapshot.downloadURL
        })
        })
    }

    render () {
        return (
        <div>
            <progress value={this.state.uploadValue} max='100'>
            {this.state.uploadValue} %
            </progress>
            <br />
            <input type='file' onChange={this.handleOnChange.bind(this)}/>
            <br />
            <img width='90' alt = "itemPicture" src={this.state.picture} />
        </div>
        )
    }
}

ReactDOM.render(<FileUpload />, document.getElementById('root'))
export default FileUpload;