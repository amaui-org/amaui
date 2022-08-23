import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTourSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourSharpFilled'
      short_name='Tour'

      {...props}
    >
      <path d="M5 22V2H7V4H21L19 9L21 14H7V22ZM12.5 11Q13.325 11 13.913 10.412Q14.5 9.825 14.5 9Q14.5 8.175 13.913 7.587Q13.325 7 12.5 7Q11.675 7 11.088 7.587Q10.5 8.175 10.5 9Q10.5 9.825 11.088 10.412Q11.675 11 12.5 11Z"/>
    </Icon>
  );
});

IconMaterialTourSharpFilled.displayName = 'AmauiIconMaterialTourSharpFilled';

export default IconMaterialTourSharpFilled;
