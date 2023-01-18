import React, {useCallback, useState} from 'react'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'

/* configure Infura auth settings */
const projectId = "2KCC4tulXjHBI9V9jdykjAFgDEF"
const projectSecret = "d7f509362eb3ad11de84fdf301f2907b"
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

/* create the client */
const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
})

const FileUploader = () => {
    const [fileUrl, updateFileUrl] = useState(``)

    const onDrop = useCallback(async acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles)
        console.log('client', client)
        const response = await client.add(acceptedFiles[0])
        //const url = `https://infura-ipfs.io/ipfs/${added.path}`
        //updateFileUrl(url)
        console.log("Response: ", response)
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)}>
            {({getRootProps, getInputProps}) => (
                <section>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
                </section>
            )}
        </Dropzone>
    );
}

export default FileUploader;