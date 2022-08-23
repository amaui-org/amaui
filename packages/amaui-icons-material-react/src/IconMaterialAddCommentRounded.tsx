import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCommentRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentRounded'
      short_name='AddComment'

      {...props}
    >
      <path d="M12 14Q12.425 14 12.713 13.712Q13 13.425 13 13V11H15Q15.425 11 15.713 10.712Q16 10.425 16 10Q16 9.575 15.713 9.287Q15.425 9 15 9H13V7Q13 6.575 12.713 6.287Q12.425 6 12 6Q11.575 6 11.288 6.287Q11 6.575 11 7V9H9Q8.575 9 8.288 9.287Q8 9.575 8 10Q8 10.425 8.288 10.712Q8.575 11 9 11H11V13Q11 13.425 11.288 13.712Q11.575 14 12 14ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575ZM4 17.175 5.175 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16V17.175Z"/>
    </Icon>
  );
});

IconMaterialAddCommentRounded.displayName = 'AmauiIconMaterialAddCommentRounded';

export default IconMaterialAddCommentRounded;
