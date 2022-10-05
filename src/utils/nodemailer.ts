import { createTransport } from 'nodemailer';
import { compile } from 'handlebars';
import * as fs from 'fs';
import { join } from 'path';

export async function newLeadNotify(
  leadEmail: string,
  leadName: string,
  leadPhone: string,
  userEmailDestiny: string,
): Promise<void> {
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const replacements = {
    leadEmail,
    leadName,
    leadPhone,
  };

  const html = fs.readFileSync(
    join(process.cwd(), './src/templates/new_lead.html'),
    {
      encoding: 'utf-8',
    },
  );

  const template = compile(html);
  const htmlToSend = template(replacements);

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: userEmailDestiny,
    subject: 'LEAD - FACEBOOK',
    html: htmlToSend,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
}
