import React, { useState } from 'react'
import TextInput from '../components/TextInput'

function CreateCampaign() {
    const [title,setTitle] = useState({title:"",description:'',target:'',})

  return (
    <div>
        <div>
            <h2>Create Campaign</h2>
        </div>

        <div>
            <div>
                <form>
                    <TextInput />
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateCampaign