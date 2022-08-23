import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConfirmationNumberSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberSharp'
      short_name='ConfirmationNumber'

      {...props}
    >
      <path d="M2 20V14Q2.825 14 3.413 13.412Q4 12.825 4 12Q4 11.175 3.413 10.587Q2.825 10 2 10V4H22V10Q21.175 10 20.587 10.587Q20 11.175 20 12Q20 12.825 20.587 13.412Q21.175 14 22 14V20ZM4 18H20V15.45Q19.075 14.9 18.538 13.988Q18 13.075 18 12Q18 10.925 18.538 10.012Q19.075 9.1 20 8.55V6H4V8.55Q4.925 9.1 5.463 10.012Q6 10.925 6 12Q6 13.075 5.463 13.988Q4.925 14.9 4 15.45ZM11 17H13V15H11ZM11 13H13V11H11ZM11 9H13V7H11ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberSharp.displayName = 'AmauiIconMaterialConfirmationNumberSharp';

export default IconMaterialConfirmationNumberSharp;
