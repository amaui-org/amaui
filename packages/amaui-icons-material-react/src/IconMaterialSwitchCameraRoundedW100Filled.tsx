import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchCameraRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraRoundedW100Filled'
      short_name='SwitchCamera'

      {...props}
    >
      <path d="M7.325 13.575 9.65 15.9Q9.775 16.025 9.9 16.025Q10.025 16.025 10.15 15.9Q10.275 15.775 10.275 15.65Q10.275 15.525 10.15 15.4L8.15 13.4H15.85L13.85 15.4Q13.725 15.525 13.725 15.65Q13.725 15.775 13.85 15.9Q13.975 16.025 14.1 16.025Q14.225 16.025 14.35 15.9L16.675 13.575Q16.9 13.35 16.9 13.05Q16.9 12.75 16.675 12.525L14.35 10.2Q14.225 10.075 14.1 10.075Q13.975 10.075 13.85 10.2Q13.725 10.325 13.725 10.45Q13.725 10.575 13.85 10.7L15.85 12.7H8.15L10.15 10.7Q10.275 10.575 10.275 10.45Q10.275 10.325 10.15 10.2Q10.025 10.075 9.9 10.075Q9.775 10.075 9.65 10.2L7.325 12.525Q7.1 12.75 7.1 13.05Q7.1 13.35 7.325 13.575ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V7.8Q3.3 7.15 3.725 6.725Q4.15 6.3 4.8 6.3H7.7L9.1 4.775Q9.325 4.55 9.613 4.425Q9.9 4.3 10.2 4.3H13.8Q14.1 4.3 14.388 4.425Q14.675 4.55 14.9 4.775L16.3 6.3H19.2Q19.85 6.3 20.275 6.725Q20.7 7.15 20.7 7.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraRoundedW100Filled.displayName = 'AmauiIconMaterialSwitchCameraRoundedW100Filled';

export default IconMaterialSwitchCameraRoundedW100Filled;
