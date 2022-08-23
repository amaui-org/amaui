import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkAsUnreadRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkAsUnreadRoundedFilled'
      short_name='MarkAsUnread'

      {...props}
    >
      <path d="M4 17Q3.175 17 2.588 16.413Q2 15.825 2 15V7.15Q2 6.775 2.213 6.412Q2.425 6.05 2.8 5.85L9.6 2.45Q9.8 2.325 10.038 2.287Q10.275 2.25 10.5 2.25Q10.725 2.25 10.963 2.287Q11.2 2.325 11.4 2.45L18.05 5.85Q18.35 6 18.562 6.325Q18.775 6.65 18.85 7H15.925L10.5 4.25L4 7.475ZM7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V10Q5 9.175 5.588 8.587Q6.175 8 7 8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM13.5 15.225Q13.625 15.225 13.725 15.2Q13.825 15.175 13.95 15.125L19.525 12.25Q19.725 12.15 19.863 11.938Q20 11.725 20 11.45Q20 10.95 19.6 10.688Q19.2 10.425 18.7 10.675L13.5 13.35L8.3 10.675Q7.875 10.45 7.438 10.688Q7 10.925 7 11.45Q7 11.725 7.15 11.938Q7.3 12.15 7.5 12.25L13.05 15.125Q13.15 15.175 13.5 15.225Z"/>
    </Icon>
  );
});

IconMaterialMarkAsUnreadRoundedFilled.displayName = 'AmauiIconMaterialMarkAsUnreadRoundedFilled';

export default IconMaterialMarkAsUnreadRoundedFilled;
