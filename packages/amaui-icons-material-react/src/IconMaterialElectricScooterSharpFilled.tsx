import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElectricScooterSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricScooterSharpFilled'
      short_name='ElectricScooter'

      {...props}
    >
      <path d="M5 18Q3.75 18 2.875 17.125Q2 16.25 2 15Q2 13.75 2.875 12.875Q3.75 12 5 12Q5.975 12 6.738 12.562Q7.5 13.125 7.8 14H13.1Q13.375 12.3 14.512 11.025Q15.65 9.75 17.3 9.25L15.9 3H12V1H17.5L19.75 11H19Q17.35 11 16.175 12.175Q15 13.35 15 15V16H7.8Q7.5 16.875 6.738 17.438Q5.975 18 5 18ZM19 18Q17.75 18 16.875 17.125Q16 16.25 16 15Q16 13.75 16.875 12.875Q17.75 12 19 12Q20.25 12 21.125 12.875Q22 13.75 22 15Q22 16.25 21.125 17.125Q20.25 18 19 18ZM13 23 7 20H11V18L17 21H13Z"/>
    </Icon>
  );
});

IconMaterialElectricScooterSharpFilled.displayName = 'AmauiIconMaterialElectricScooterSharpFilled';

export default IconMaterialElectricScooterSharpFilled;
