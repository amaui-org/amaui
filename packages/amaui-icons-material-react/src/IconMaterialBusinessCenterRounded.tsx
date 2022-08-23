import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBusinessCenterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterRounded'
      short_name='BusinessCenter'

      {...props}
    >
      <path d="M8 6V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V19Q22 19.825 21.413 20.413Q20.825 21 20 21H4Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4ZM20 15H15V16Q15 16.425 14.713 16.712Q14.425 17 14 17H10Q9.575 17 9.288 16.712Q9 16.425 9 16V15H4V19Q4 19 4 19Q4 19 4 19H20Q20 19 20 19Q20 19 20 19ZM11 15H13V13H11ZM4 13H9V12Q9 11.575 9.288 11.287Q9.575 11 10 11H14Q14.425 11 14.713 11.287Q15 11.575 15 12V13H20V8Q20 8 20 8Q20 8 20 8H4Q4 8 4 8Q4 8 4 8ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterRounded.displayName = 'AmauiIconMaterialBusinessCenterRounded';

export default IconMaterialBusinessCenterRounded;
