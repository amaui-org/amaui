import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarCrashSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarCrashSharpFilled'
      short_name='CarCrash'

      {...props}
    >
      <path d="M18 11Q15.925 11 14.463 9.537Q13 8.075 13 6Q13 3.95 14.45 2.475Q15.9 1 18 1Q20.075 1 21.538 2.462Q23 3.925 23 6Q23 8.075 21.538 9.537Q20.075 11 18 11ZM17.5 7H18.5V3H17.5ZM18 9Q18.2 9 18.35 8.85Q18.5 8.7 18.5 8.5Q18.5 8.3 18.35 8.15Q18.2 8 18 8Q17.8 8 17.65 8.15Q17.5 8.3 17.5 8.5Q17.5 8.7 17.65 8.85Q17.8 9 18 9ZM7.5 15Q8.125 15 8.562 14.562Q9 14.125 9 13.5Q9 12.875 8.562 12.438Q8.125 12 7.5 12Q6.875 12 6.438 12.438Q6 12.875 6 13.5Q6 14.125 6.438 14.562Q6.875 15 7.5 15ZM3 20V11L5.45 4H11.3Q11.15 4.475 11.075 4.975Q11 5.475 11 6H6.85L5.8 9H11.675Q12.25 10.2 13.225 11.087Q14.2 11.975 15.4 12.5Q15.2 12.7 15.1 12.962Q15 13.225 15 13.5Q15 14.125 15.438 14.562Q15.875 15 16.5 15Q17.125 15 17.562 14.562Q18 14.125 18 13.5Q18 13.375 17.988 13.25Q17.975 13.125 17.925 13Q18.725 13.025 19.5 12.85Q20.275 12.675 21 12.325V20H18V18H6V20Z"/>
    </Icon>
  );
});

IconMaterialCarCrashSharpFilled.displayName = 'AmauiIconMaterialCarCrashSharpFilled';

export default IconMaterialCarCrashSharpFilled;
