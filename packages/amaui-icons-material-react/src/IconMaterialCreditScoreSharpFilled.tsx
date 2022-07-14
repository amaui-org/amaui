import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreSharpFilled'
      short_name='CreditScore'

      {...props}
    >
      <path d="M14.95 22 10.7 17.75 12.1 16.35 14.95 19.15 20.6 13.5 22 14.95ZM4 12H20V8H4ZM2 20V4H22V12H19.275L14.95 16.325L12.125 13.5L7.875 17.75L8.1 18V20Z"/>
    </Icon>
  );
});

export default IconMaterialCreditScoreSharpFilled;
