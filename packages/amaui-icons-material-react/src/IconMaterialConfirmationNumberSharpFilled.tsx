import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConfirmationNumberSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberSharpFilled'
      short_name='ConfirmationNumber'

      {...props}
    >
      <path d="M2 20V14Q2.825 14 3.413 13.412Q4 12.825 4 12Q4 11.175 3.413 10.587Q2.825 10 2 10V4H22V10Q21.175 10 20.587 10.587Q20 11.175 20 12Q20 12.825 20.587 13.412Q21.175 14 22 14V20ZM11 17H13V15H11ZM11 13H13V11H11ZM11 9H13V7H11Z"/>
    </Icon>
  );
});

export default IconMaterialConfirmationNumberSharpFilled;
