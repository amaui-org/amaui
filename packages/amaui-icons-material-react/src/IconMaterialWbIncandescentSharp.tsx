import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbIncandescentSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbIncandescentSharp'
      short_name='WbIncandescent'

      {...props}
    >
      <path d="M11 22V19H13V22ZM2 13V11H5V13ZM19 13V11H22V13ZM18 19.9 15.9 17.8 17.3 16.4 19.4 18.5ZM6 19.9 4.6 18.5 6.7 16.4 8.1 17.8ZM12 17Q9.925 17 8.463 15.537Q7 14.075 7 12Q7 10.8 7.538 9.762Q8.075 8.725 9 8V3H15V8Q15.925 8.725 16.462 9.762Q17 10.8 17 12Q17 14.075 15.538 15.537Q14.075 17 12 17ZM11 7.1Q11.25 7.05 11.5 7.025Q11.75 7 12 7Q12.25 7 12.5 7.025Q12.75 7.05 13 7.1V5H11ZM12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialWbIncandescentSharp.displayName = 'AmauiIconMaterialWbIncandescentSharp';

export default IconMaterialWbIncandescentSharp;
