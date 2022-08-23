import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapasSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasSharpFilled'
      short_name='Tapas'

      {...props}
    >
      <path d="M6 23V14H4Q2.95 14 2.225 13.275Q1.5 12.55 1.5 11.5Q1.5 10.45 2.225 9.725Q2.95 9 4 9H6V8H4Q2.95 8 2.225 7.275Q1.5 6.55 1.5 5.5Q1.5 4.45 2.225 3.725Q2.95 3 4 3H6V1H8V3H10Q11.05 3 11.775 3.725Q12.5 4.45 12.5 5.5Q12.5 6.55 11.775 7.275Q11.05 8 10 8H8V9H10Q11.05 9 11.775 9.725Q12.5 10.45 12.5 11.5Q12.5 12.55 11.775 13.275Q11.05 14 10 14H8V23ZM15 23V21H17V13.85Q15.7 13.5 14.85 12.45Q14 11.4 14 10V1H22V10Q22 11.4 21.15 12.45Q20.3 13.5 19 13.85V21H21V23ZM16 6H20V3H16Z"/>
    </Icon>
  );
});

IconMaterialTapasSharpFilled.displayName = 'AmauiIconMaterialTapasSharpFilled';

export default IconMaterialTapasSharpFilled;
