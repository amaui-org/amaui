import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserRoundedW100Filled'
      short_name='OpenInBrowser'

      {...props}
    >
      <path d="M12 19.7Q11.85 19.7 11.75 19.6Q11.65 19.5 11.65 19.35V13.35L9.625 15.375Q9.525 15.475 9.4 15.475Q9.275 15.475 9.15 15.35Q9.025 15.225 9.025 15.1Q9.025 14.975 9.15 14.85L11.475 12.525Q11.6 12.4 11.725 12.35Q11.85 12.3 12 12.3Q12.15 12.3 12.275 12.35Q12.4 12.4 12.525 12.525L14.875 14.875Q14.975 14.975 14.975 15.1Q14.975 15.225 14.85 15.35Q14.725 15.475 14.6 15.475Q14.475 15.475 14.35 15.35L12.35 13.35V19.35Q12.35 19.5 12.25 19.6Q12.15 19.7 12 19.7ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7H15.7Q15.55 19.7 15.45 19.6Q15.35 19.5 15.35 19.35Q15.35 19.2 15.45 19.1Q15.55 19 15.7 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V7H5V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H8.3Q8.45 19 8.55 19.1Q8.65 19.2 8.65 19.35Q8.65 19.5 8.55 19.6Q8.45 19.7 8.3 19.7Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserRoundedW100Filled.displayName = 'AmauiIconMaterialOpenInBrowserRoundedW100Filled';

export default IconMaterialOpenInBrowserRoundedW100Filled;
