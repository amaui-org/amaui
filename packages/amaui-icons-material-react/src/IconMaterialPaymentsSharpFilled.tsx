import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaymentsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsSharpFilled'
      short_name='Payments'

      {...props}
    >
      <path d="M14 13Q15.25 13 16.125 12.125Q17 11.25 17 10Q17 8.75 16.125 7.875Q15.25 7 14 7Q12.75 7 11.875 7.875Q11 8.75 11 10Q11 11.25 11.875 12.125Q12.75 13 14 13ZM5 16V4H23V16ZM1 20V7H3V18H20V20ZM7 8Q7.825 8 8.412 7.412Q9 6.825 9 6H7ZM21 8V6H19Q19 6.825 19.587 7.412Q20.175 8 21 8ZM19 14H21V12Q20.175 12 19.587 12.587Q19 13.175 19 14ZM7 14H9Q9 13.175 8.412 12.587Q7.825 12 7 12Z"/>
    </Icon>
  );
});

IconMaterialPaymentsSharpFilled.displayName = 'AmauiIconMaterialPaymentsSharpFilled';

export default IconMaterialPaymentsSharpFilled;
