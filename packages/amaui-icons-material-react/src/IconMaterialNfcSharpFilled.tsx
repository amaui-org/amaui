import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNfcSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcSharpFilled'
      short_name='Nfc'

      {...props}
    >
      <path d="M7 17H17V7H13Q12.175 7 11.588 7.587Q11 8.175 11 9V10.3Q10.5 10.575 10.25 11Q10 11.425 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.425 13.725 11Q13.45 10.575 13 10.3V9H15V15H9V9H10V7H7ZM3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialNfcSharpFilled.displayName = 'AmauiIconMaterialNfcSharpFilled';

export default IconMaterialNfcSharpFilled;
