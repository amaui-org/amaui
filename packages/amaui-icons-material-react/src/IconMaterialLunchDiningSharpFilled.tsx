import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLunchDiningSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LunchDiningSharpFilled'
      short_name='LunchDining'

      {...props}
    >
      <path d="M2 10V9Q2 6.125 4.713 4.562Q7.425 3 12 3Q16.575 3 19.288 4.562Q22 6.125 22 9V10ZM2 14.5V12.5Q2.9 12.5 3.425 12Q3.95 11.5 5.35 11.5Q6.75 11.5 7.25 12Q7.75 12.5 8.65 12.5Q9.55 12.5 10.075 12Q10.6 11.5 12 11.5Q13.4 11.5 13.925 12Q14.45 12.5 15.35 12.5Q16.25 12.5 16.75 12Q17.25 11.5 18.65 11.5Q20.05 11.5 20.625 12Q21.2 12.5 22 12.5V14.5Q20.6 14.5 20.125 14Q19.65 13.5 18.75 13.5Q17.85 13.5 17.3 14Q16.75 14.5 15.35 14.5Q13.95 14.5 13.425 14Q12.9 13.5 12 13.5Q11.1 13.5 10.575 14Q10.05 14.5 8.65 14.5Q7.25 14.5 6.75 14Q6.25 13.5 5.35 13.5Q4.45 13.5 3.925 14Q3.4 14.5 2 14.5ZM2 21V16H22V21Z"/>
    </Icon>
  );
});

IconMaterialLunchDiningSharpFilled.displayName = 'AmauiIconMaterialLunchDiningSharpFilled';

export default IconMaterialLunchDiningSharpFilled;
