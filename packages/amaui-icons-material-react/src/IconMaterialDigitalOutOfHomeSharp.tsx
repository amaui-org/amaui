import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDigitalOutOfHomeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalOutOfHomeSharp'
      short_name='DigitalOutOfHome'

      {...props}
    >
      <path d="M0 23V3Q0 2.175 0.588 1.587Q1.175 1 2 1H9Q9.825 1 10.413 1.587Q11 2.175 11 3V23H9V21H2V23ZM2 19H9V3Q9 3 9 3Q9 3 9 3H2Q2 3 2 3Q2 3 2 3ZM4 13V9L7.5 11ZM17 7Q16.175 7 15.588 6.412Q15 5.825 15 5Q15 4.175 15.588 3.587Q16.175 3 17 3Q17.825 3 18.413 3.587Q19 4.175 19 5Q19 5.825 18.413 6.412Q17.825 7 17 7ZM15.5 23V16.4L17.65 14.35L17.125 11.75Q16.15 12.875 14.763 13.438Q13.375 14 12 14V12Q13.2 12 14.325 11.425Q15.45 10.85 16.175 9.675L16.925 8.45Q17.3 7.825 18.025 7.6Q18.75 7.375 19.4 7.65L24 9.6V14.5H22V10.925L20.575 10.325L23 23H20.95L19.425 15.85L17.5 17.65V23Z"/>
    </Icon>
  );
});

IconMaterialDigitalOutOfHomeSharp.displayName = 'AmauiIconMaterialDigitalOutOfHomeSharp';

export default IconMaterialDigitalOutOfHomeSharp;
