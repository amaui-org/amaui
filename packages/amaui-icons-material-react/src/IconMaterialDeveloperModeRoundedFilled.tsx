import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeveloperModeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeRoundedFilled'
      short_name='DeveloperMode'

      {...props}
    >
      <path d="M5 7V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V7H17V6H7V7ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V17H7V18H17V17H19V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM14.7 15.85Q14.425 15.55 14.413 15.15Q14.4 14.75 14.7 14.45L17.15 12L14.7 9.55Q14.4 9.25 14.413 8.85Q14.425 8.45 14.7 8.15Q15 7.85 15.413 7.837Q15.825 7.825 16.125 8.125L19.3 11.3Q19.45 11.45 19.513 11.625Q19.575 11.8 19.575 12Q19.575 12.2 19.513 12.375Q19.45 12.55 19.3 12.7L16.125 15.875Q15.825 16.175 15.413 16.163Q15 16.15 14.7 15.85ZM7.875 15.875 4.7 12.7Q4.55 12.55 4.487 12.375Q4.425 12.2 4.425 12Q4.425 11.8 4.487 11.625Q4.55 11.45 4.7 11.3L7.875 8.125Q8.175 7.825 8.588 7.837Q9 7.85 9.3 8.15Q9.575 8.45 9.588 8.85Q9.6 9.25 9.3 9.55L6.85 12L9.3 14.45Q9.6 14.75 9.588 15.15Q9.575 15.55 9.3 15.85Q9 16.15 8.588 16.163Q8.175 16.175 7.875 15.875Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeRoundedFilled.displayName = 'AmauiIconMaterialDeveloperModeRoundedFilled';

export default IconMaterialDeveloperModeRoundedFilled;
