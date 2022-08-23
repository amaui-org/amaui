import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaymentsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsSharp'
      short_name='Payments'

      {...props}
    >
      <path d="M14 13Q12.75 13 11.875 12.125Q11 11.25 11 10Q11 8.75 11.875 7.875Q12.75 7 14 7Q15.25 7 16.125 7.875Q17 8.75 17 10Q17 11.25 16.125 12.125Q15.25 13 14 13ZM5 16V4H23V16ZM9 14H19Q19 13.175 19.587 12.587Q20.175 12 21 12V8Q20.175 8 19.587 7.412Q19 6.825 19 6H9Q9 6.825 8.412 7.412Q7.825 8 7 8V12Q7.825 12 8.412 12.587Q9 13.175 9 14ZM1 20V7H3V18H20V20ZM7 14V6Z"/>
    </Icon>
  );
});

IconMaterialPaymentsSharp.displayName = 'AmauiIconMaterialPaymentsSharp';

export default IconMaterialPaymentsSharp;
