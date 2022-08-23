import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbIncandescentSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIncandescentSharpFilled'
      short_name='WbIncandescent'

      {...props}
    >
      <path d="M11 22V19H13V22ZM2 13V11H5V13ZM19 13V11H22V13ZM18 19.9 15.9 17.8 17.3 16.4 19.4 18.5ZM6 19.9 4.6 18.5 6.7 16.4 8.1 17.8ZM12 17Q9.925 17 8.463 15.537Q7 14.075 7 12Q7 10.8 7.538 9.762Q8.075 8.725 9 8V3H15V8Q15.925 8.725 16.462 9.762Q17 10.8 17 12Q17 14.075 15.538 15.537Q14.075 17 12 17ZM11 7.1Q11.25 7.05 11.5 7.025Q11.75 7 12 7Q12.25 7 12.5 7.025Q12.75 7.05 13 7.1V5H11Z"/>
    </Icon>
  );
});

IconMaterialWbIncandescentSharpFilled.displayName = 'AmauiIconMaterialWbIncandescentSharpFilled';

export default IconMaterialWbIncandescentSharpFilled;
