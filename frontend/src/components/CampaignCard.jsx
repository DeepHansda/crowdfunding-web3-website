import React from 'react'

function CampaignCard({campaign}) {
  return (
    <div className='bg-[#343a40]'>
        <div>
            <img src={campaign.image} alt="image"/>
        </div>
        <div>
            <h4>{campaign.title}</h4>
        </div>
        <div>
            <p>{campaign.description}</p>
        </div>
        <div>
            <div><p>target:{campaign.target}</p></div>
            <div><p>collected:{campaign.amountCollected}</p></div>
        </div>
        <div>
            <p>{campaign.deadline}</p>
        </div>
    </div>
  )
}

export default CampaignCard