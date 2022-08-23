import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenRounded'
      short_name='Straighten'

      {...props}
    >
      <path d="M4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V8Q2 7.175 2.588 6.588Q3.175 6 4 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 16H20Q20 16 20 16Q20 16 20 16V8Q20 8 20 8Q20 8 20 8H17V12H15V8H13V12H11V8H9V12H7V8H4Q4 8 4 8Q4 8 4 8V16Q4 16 4 16Q4 16 4 16ZM7 12Q7.3 12 7.538 12Q7.775 12 8 12Q8.225 12 8.463 12Q8.7 12 9 12ZM11 12Q11.3 12 11.538 12Q11.775 12 12 12Q12.225 12 12.463 12Q12.7 12 13 12ZM15 12Q15.3 12 15.538 12Q15.775 12 16 12Q16.225 12 16.462 12Q16.7 12 17 12ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialStraightenRounded.displayName = 'AmauiIconMaterialStraightenRounded';

export default IconMaterialStraightenRounded;
