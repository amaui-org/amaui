import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccessibleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccessibleSharpFilled'
      short_name='Accessible'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM17 22V17Q17 17 17 17Q17 17 17 17H10V9Q10 8.125 10.562 7.562Q11.125 7 12 7Q12.6 7 13.038 7.262Q13.475 7.525 13.975 8.1Q15.35 9.75 16.462 10.363Q17.575 10.975 19 11V13Q17.675 13 16.325 12.425Q14.975 11.85 14 11.05V14.5H19V22ZM10 22Q7.925 22 6.463 20.538Q5 19.075 5 17Q5 15.2 6.138 13.825Q7.275 12.45 9 12.1V14.15Q8.125 14.5 7.562 15.262Q7 16.025 7 17Q7 18.25 7.875 19.125Q8.75 20 10 20Q10.975 20 11.738 19.438Q12.5 18.875 12.85 18H14.9Q14.55 19.725 13.175 20.863Q11.8 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialAccessibleSharpFilled.displayName = 'AmauiIconMaterialAccessibleSharpFilled';

export default IconMaterialAccessibleSharpFilled;
