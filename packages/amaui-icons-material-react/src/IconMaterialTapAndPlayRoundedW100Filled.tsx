import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapAndPlayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayRoundedW100Filled'
      short_name='TapAndPlay'

      {...props}
    >
      <path d="M15.9 21.7V21H16.2Q16.55 21 16.775 20.775Q17 20.55 17 20.2V5.35H7V12.1H6.3V3.8Q6.3 3.15 6.725 2.725Q7.15 2.3 7.8 2.3H16.2Q16.85 2.3 17.275 2.725Q17.7 3.15 17.7 3.8V20.2Q17.7 20.85 17.275 21.275Q16.85 21.7 16.2 21.7ZM6.3 21.7V20.5Q6.8 20.5 7.15 20.85Q7.5 21.2 7.5 21.7ZM10.35 21.7Q10.225 21.7 10.113 21.6Q10 21.5 9.975 21.35Q9.85 20 8.925 19.075Q8 18.15 6.65 18.025Q6.5 18 6.4 17.9Q6.3 17.8 6.3 17.65Q6.3 17.5 6.413 17.4Q6.525 17.3 6.65 17.325Q8.275 17.45 9.413 18.587Q10.55 19.725 10.675 21.35Q10.7 21.475 10.6 21.587Q10.5 21.7 10.35 21.7ZM13.55 21.7Q13.4 21.7 13.3 21.6Q13.2 21.5 13.2 21.35Q13.075 18.7 11.188 16.812Q9.3 14.925 6.65 14.8Q6.5 14.8 6.4 14.7Q6.3 14.6 6.3 14.45Q6.3 14.3 6.4 14.2Q6.5 14.1 6.65 14.1Q9.6 14.225 11.688 16.312Q13.775 18.4 13.9 21.35Q13.9 21.5 13.8 21.6Q13.7 21.7 13.55 21.7Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayRoundedW100Filled.displayName = 'AmauiIconMaterialTapAndPlayRoundedW100Filled';

export default IconMaterialTapAndPlayRoundedW100Filled;
