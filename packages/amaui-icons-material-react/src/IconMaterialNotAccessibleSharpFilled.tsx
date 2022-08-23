import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotAccessibleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotAccessibleSharpFilled'
      short_name='NotAccessible'

      {...props}
    >
      <path d="M19 13Q17.675 13 16.325 12.425Q14.975 11.85 14 11.05L10.575 7.625Q10.825 7.35 11.15 7.187Q11.475 7.025 12 7.025Q12.375 7.025 12.825 7.2Q13.275 7.375 13.65 7.75L14.925 9.175Q15.65 9.975 16.738 10.5Q17.825 11.025 19 11ZM12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM19.775 22.6 14.175 17H12Q11.175 17 10.588 16.413Q10 15.825 10 15V12.825L1.4 4.225L2.8 2.8L21.2 21.2ZM10 22Q7.925 22 6.463 20.538Q5 19.075 5 17Q5 15.175 6.138 13.812Q7.275 12.45 9 12.1V14.175Q8.125 14.5 7.562 15.262Q7 16.025 7 17Q7 18.25 7.875 19.125Q8.75 20 10 20Q10.975 20 11.75 19.438Q12.525 18.875 12.825 18H14.9Q14.55 19.725 13.188 20.863Q11.825 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialNotAccessibleSharpFilled.displayName = 'AmauiIconMaterialNotAccessibleSharpFilled';

export default IconMaterialNotAccessibleSharpFilled;
