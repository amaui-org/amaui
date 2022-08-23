import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkRounded'
      short_name='HomeWork'

      {...props}
    >
      <path d="M17 9H19V7H17ZM17 13H19V11H17ZM17 17H19V15H17ZM17 21V19H21V5H12V6.4L10 4.95Q10 4.15 10.588 3.575Q11.175 3 12 3H21Q21.825 3 22.413 3.587Q23 4.175 23 5V19Q23 19.825 22.413 20.413Q21.825 21 21 21ZM3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V12.025Q1 11.525 1.225 11.1Q1.45 10.675 1.85 10.4L6.85 6.825Q7.375 6.45 8 6.45Q8.625 6.45 9.15 6.825L14.15 10.4Q14.55 10.675 14.775 11.1Q15 11.525 15 12.025V19Q15 19.825 14.413 20.413Q13.825 21 13 21ZM3 19H6V14H10V19H13V12L8 8.5L3 12ZM17 11.025Q17 11.025 17 11.025Q17 11.025 17 11.025ZM8 14ZM8 14Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkRounded.displayName = 'AmauiIconMaterialHomeWorkRounded';

export default IconMaterialHomeWorkRounded;
