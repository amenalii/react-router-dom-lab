import { Link } from "react-router";

const MailboxList = (props) => {
  return (
    <>
      <h1>Mailboxes</h1>
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>
              {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default MailboxList;
