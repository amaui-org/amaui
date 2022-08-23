import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRailwayAlertSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RailwayAlertSharpFilled'
      short_name='RailwayAlert'

      {...props}
    >
      <path d="M18 11Q15.925 11 14.463 9.537Q13 8.075 13 6Q13 3.925 14.463 2.462Q15.925 1 18 1Q20.075 1 21.538 2.462Q23 3.925 23 6Q23 8.075 21.538 9.537Q20.075 11 18 11ZM17.5 7H18.5V3H17.5ZM18 9Q18.2 9 18.35 8.85Q18.5 8.7 18.5 8.5Q18.5 8.3 18.35 8.15Q18.2 8 18 8Q17.8 8 17.65 8.15Q17.5 8.3 17.5 8.5Q17.5 8.7 17.65 8.85Q17.8 9 18 9ZM10 17Q10.625 17 11.062 16.562Q11.5 16.125 11.5 15.5Q11.5 14.875 11.062 14.438Q10.625 14 10 14Q9.375 14 8.938 14.438Q8.5 14.875 8.5 15.5Q8.5 16.125 8.938 16.562Q9.375 17 10 17ZM4 22V21L5.5 20Q4.025 20 3.013 18.988Q2 17.975 2 16.5V7Q2 4.975 3.963 3.987Q5.925 3 10 3Q10.425 3 10.812 3Q11.2 3 11.675 3Q11.35 3.725 11.175 4.475Q11 5.225 11 6Q11 6.5 11.075 7.012Q11.15 7.525 11.3 8H4V11H13.1Q14.1 12 15.35 12.5Q16.6 13 18 13V16.5Q18 17.975 16.988 18.988Q15.975 20 14.5 20L16 21V22Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlertSharpFilled.displayName = 'AmauiIconMaterialRailwayAlertSharpFilled';

export default IconMaterialRailwayAlertSharpFilled;
