import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBusinessCenterRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterRoundedFilled'
      short_name='BusinessCenter'

      {...props}
    >
      <path d="M2 13V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V13H15V12Q15 11.575 14.713 11.287Q14.425 11 14 11H10Q9.575 11 9.288 11.287Q9 11.575 9 12V13ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4ZM11 15V13H13V15ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V15H9V16Q9 16.425 9.288 16.712Q9.575 17 10 17H14Q14.425 17 14.713 16.712Q15 16.425 15 16V15H22V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterRoundedFilled.displayName = 'AmauiIconMaterialBusinessCenterRoundedFilled';

export default IconMaterialBusinessCenterRoundedFilled;
