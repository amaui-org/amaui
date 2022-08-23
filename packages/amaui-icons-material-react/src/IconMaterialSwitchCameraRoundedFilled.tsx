import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchCameraRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraRoundedFilled'
      short_name='SwitchCamera'

      {...props}
    >
      <path d="M5.7 13.7 8.3 16.3Q8.575 16.575 9 16.575Q9.425 16.575 9.7 16.3Q9.975 16.025 9.975 15.6Q9.975 15.175 9.7 14.9L8.85 14.05H15.15L14.3 14.9Q14.025 15.175 14.025 15.6Q14.025 16.025 14.3 16.3Q14.575 16.575 15 16.575Q15.425 16.575 15.7 16.3L18.3 13.7Q18.575 13.425 18.575 13Q18.575 12.575 18.3 12.3L15.7 9.7Q15.425 9.425 15 9.425Q14.575 9.425 14.3 9.7Q14 10 14 10.4Q14 10.8 14.275 11.1L15.2 12.05H8.8L9.725 11.1Q10 10.8 10 10.4Q10 10 9.7 9.7Q9.425 9.425 9 9.425Q8.575 9.425 8.3 9.7L5.7 12.3Q5.425 12.575 5.425 13Q5.425 13.425 5.7 13.7ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L8.4 3.65Q8.675 3.325 9.062 3.162Q9.45 3 9.875 3H14.125Q14.55 3 14.938 3.162Q15.325 3.325 15.6 3.65L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraRoundedFilled.displayName = 'AmauiIconMaterialSwitchCameraRoundedFilled';

export default IconMaterialSwitchCameraRoundedFilled;
