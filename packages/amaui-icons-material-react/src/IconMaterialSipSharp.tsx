import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSipSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipSharp'
      short_name='Sip'

      {...props}
    >
      <path d="M11 15H13V9H11ZM14 15H15.5V13H19V9H14ZM15.5 11.5V10.5H17.5V11.5ZM5 15H10V11.25H6.5V10.5H10V9H5V12.75H8.5V13.5H5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialSipSharp.displayName = 'AmauiIconMaterialSipSharp';

export default IconMaterialSipSharp;
