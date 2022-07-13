import React from "react";

import ContentWrapper from "../../UI/ContentWrapper";
import ModalWithOverlay from "../../UI/ModalWithOverlay";

const CompletedReminders = ({ completedReminders }) => {
  console.log(completedReminders);
//   return (
//     <ModalWithOverlay>
//       {completedReminders.length !== 0 || completedReminders !== undefined
//         ? completedReminders.map((item) => {
//             return (
//               <ContentWrapper key={item.id}>
//                 <div>
//                   <h2>{item.name}</h2>
//                   <p>{item.dueDate}</p>
//                   <p>dateOfCompletion</p>
//                 </div>
//               </ContentWrapper>
//             );
//           })
//         : ""}
//     </ModalWithOverlay>
//   );
};

export default CompletedReminders;
