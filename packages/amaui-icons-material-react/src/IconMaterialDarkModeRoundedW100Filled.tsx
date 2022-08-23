import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDarkModeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeRoundedW100Filled'
      short_name='DarkMode'

      {...props}
    >
      <path d="M12.075 19.7Q8.875 19.7 6.625 17.45Q4.375 15.2 4.375 12Q4.375 9.825 5.537 7.9Q6.7 5.975 9.025 4.925Q9.6 4.65 9.913 4.975Q10.225 5.3 10.1 5.775Q9.975 6.2 9.925 6.625Q9.875 7.05 9.875 7.5Q9.875 10.3 11.825 12.25Q13.775 14.2 16.575 14.2Q17.25 14.2 17.775 14.075Q18.3 13.95 18.65 13.95Q19.05 13.95 19.225 14.188Q19.4 14.425 19.225 14.85Q18.4 17 16.463 18.35Q14.525 19.7 12.075 19.7Z"/>
    </Icon>
  );
});

IconMaterialDarkModeRoundedW100Filled.displayName = 'AmauiIconMaterialDarkModeRoundedW100Filled';

export default IconMaterialDarkModeRoundedW100Filled;
