import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCommentRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentRoundedW100'
      short_name='AddComment'

      {...props}
    >
      <path d="M12 13.35Q12.15 13.35 12.25 13.25Q12.35 13.15 12.35 13V10.35H15Q15.15 10.35 15.25 10.25Q15.35 10.15 15.35 10Q15.35 9.85 15.25 9.75Q15.15 9.65 15 9.65H12.35V7Q12.35 6.85 12.25 6.75Q12.15 6.65 12 6.65Q11.85 6.65 11.75 6.75Q11.65 6.85 11.65 7V9.65H9Q8.85 9.65 8.75 9.75Q8.65 9.85 8.65 10Q8.65 10.15 8.75 10.25Q8.85 10.35 9 10.35H11.65V13Q11.65 13.15 11.75 13.25Q11.85 13.35 12 13.35ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7ZM4 17.8 5.8 16H19.2Q19.55 16 19.775 15.775Q20 15.55 20 15.2V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8ZM4 4.8Q4 4.45 4 4.225Q4 4 4 4Q4 4 4 4.225Q4 4.45 4 4.8V15.2Q4 15.55 4 15.775Q4 16 4 16V17.8Z"/>
    </Icon>
  );
});

IconMaterialAddCommentRoundedW100.displayName = 'AmauiIconMaterialAddCommentRoundedW100';

export default IconMaterialAddCommentRoundedW100;
