import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageRoundedFilled'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M3 9.575V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V11.575L18.7 9.275Q18.55 9.125 18.375 9.062Q18.2 9 18 9Q17.8 9 17.625 9.062Q17.45 9.125 17.3 9.275L14 12.575L10.7 9.275Q10.55 9.125 10.375 9.062Q10.2 9 10 9Q9.8 9 9.625 9.062Q9.45 9.125 9.3 9.275L6 12.575ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V12.4L5.3 14.7Q5.45 14.85 5.625 14.912Q5.8 14.975 6 14.975Q6.2 14.975 6.375 14.912Q6.55 14.85 6.7 14.7L10 11.4L13.3 14.7Q13.45 14.85 13.625 14.912Q13.8 14.975 14 14.975Q14.2 14.975 14.375 14.912Q14.55 14.85 14.7 14.7L18 11.4L21 14.4V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageRoundedFilled.displayName = 'AmauiIconMaterialBrokenImageRoundedFilled';

export default IconMaterialBrokenImageRoundedFilled;
