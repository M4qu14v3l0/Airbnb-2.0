// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title : string
  img : string
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [
        {
            img:"https://i.pinimg.com/564x/c1/da/c0/c1dac026e8b510b46a061d8bc9c1a309.jpg",
            title:"Outdoor getaways"
        },
        {
            img:"https://i.pinimg.com/564x/88/4f/1b/884f1b82707a26915c4001e50f0017d0.jpg",
            title:"Unique Stays"
        },
        {
            img:"https://i.pinimg.com/564x/45/02/22/450222e1eb291291b94d14886bcce106.jpg",
            title:"Entire homes"
        },
        {
            img:"https://i.pinimg.com/564x/72/b4/6f/72b46fe064d0085d8d60c3d48bf8c497.jpg",
            title:"Pets Allowed"
        },
        {
            img:"https://i.pinimg.com/564x/f6/18/5b/f6185b76345f9584ea4ca2c2cf3605c0.jpg",
            title:"Great Views"
        },
    ]
  )
}
