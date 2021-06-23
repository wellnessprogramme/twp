import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER
})

export default async function handler(req, res) {
  const { fname, sname, email } = req.body

  if (!email || !fname || !sname) {
    return res.status(400).json({ error: 'Missing body parameters' })
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      tags: Array('Free Guide Onboarding'),
      merge_fields: {
        FNAME: fname,
        SNAME: sname
      }
    })
    console.log(res)

    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
