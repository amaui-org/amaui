import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreditScoreSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditScoreSharp'
      short_name='CreditScore'

      {...props}
    >
      <path d="M4 8H20V6H4ZM2 20V4H22V12H4V18H8.1V20ZM14.95 22 10.7 17.75 12.1 16.35 14.95 19.15 20.6 13.5 22 14.95ZM4 6V18V17.75V13.5V16.325V12V8V6Z"/>
    </Icon>
  );
});

export default IconMaterialCreditScoreSharp;
