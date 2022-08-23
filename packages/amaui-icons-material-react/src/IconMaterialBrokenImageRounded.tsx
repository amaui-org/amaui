import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageRounded'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM6 12.575 9.3 9.275Q9.45 9.125 9.625 9.062Q9.8 9 10 9Q10.2 9 10.375 9.062Q10.55 9.125 10.7 9.275L14 12.575L17.3 9.275Q17.45 9.125 17.625 9.062Q17.8 9 18 9Q18.2 9 18.375 9.062Q18.55 9.125 18.7 9.275L19 9.575V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V11.575ZM5 19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V12.4L18 11.4L14.7 14.7Q14.575 14.825 14.388 14.9Q14.2 14.975 14 14.975Q13.8 14.975 13.625 14.9Q13.45 14.825 13.3 14.7L10 11.4L6.7 14.7Q6.55 14.85 6.375 14.912Q6.2 14.975 6 14.975Q5.8 14.975 5.625 14.912Q5.45 14.85 5.3 14.7L5 14.4ZM5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19Q5 19 5 19V12.4V14.4V11.575V9.575V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V11.575V14.4Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageRounded.displayName = 'AmauiIconMaterialBrokenImageRounded';

export default IconMaterialBrokenImageRounded;
