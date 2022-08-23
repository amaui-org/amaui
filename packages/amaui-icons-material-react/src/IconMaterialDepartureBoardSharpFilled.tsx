import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDepartureBoardSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DepartureBoardSharpFilled'
      short_name='DepartureBoard'

      {...props}
    >
      <path d="M19.65 8.4 20.4 7.65 18.5 5.8V3H17.5V6.2ZM6.5 17Q7.125 17 7.562 16.562Q8 16.125 8 15.5Q8 14.875 7.562 14.438Q7.125 14 6.5 14Q5.875 14 5.438 14.438Q5 14.875 5 15.5Q5 16.125 5.438 16.562Q5.875 17 6.5 17ZM13.5 17Q14.125 17 14.562 16.562Q15 16.125 15 15.5Q15 14.875 14.562 14.438Q14.125 14 13.5 14Q12.875 14 12.438 14.438Q12 14.875 12 15.5Q12 16.125 12.438 16.562Q12.875 17 13.5 17ZM18 11Q15.925 11 14.463 9.537Q13 8.075 13 6Q13 3.925 14.463 2.462Q15.925 1 18 1Q20.075 1 21.538 2.462Q23 3.925 23 6Q23 8.075 21.538 9.537Q20.075 11 18 11ZM3 22V18.95Q2.55 18.45 2.275 17.837Q2 17.225 2 16.5V7Q2 6.25 2.288 5.487Q2.575 4.725 3.562 4.125Q4.55 3.525 6.475 3.212Q8.4 2.9 11.65 3.05Q11.175 4.25 11.05 5.487Q10.925 6.725 11.3 8H4V11H13.1Q14.05 11.95 15.312 12.475Q16.575 13 18 13V16.5Q18 17.225 17.725 17.837Q17.45 18.45 17 18.95V22H14V20H6V22Z"/>
    </Icon>
  );
});

IconMaterialDepartureBoardSharpFilled.displayName = 'AmauiIconMaterialDepartureBoardSharpFilled';

export default IconMaterialDepartureBoardSharpFilled;
