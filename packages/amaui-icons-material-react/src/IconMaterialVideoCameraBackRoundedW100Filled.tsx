import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackRoundedW100Filled'
      short_name='VideoCameraBack'

      {...props}
    >
      <path d="M5.425 18.7Q4.775 18.7 4.35 18.275Q3.925 17.85 3.925 17.2V6.8Q3.925 6.15 4.35 5.725Q4.775 5.3 5.425 5.3H15.825Q16.475 5.3 16.9 5.725Q17.325 6.15 17.325 6.8V11.5L19.4 9.425Q19.6 9.225 19.838 9.337Q20.075 9.45 20.075 9.725V14.275Q20.075 14.55 19.838 14.662Q19.6 14.775 19.4 14.575L17.325 12.5V17.2Q17.325 17.85 16.9 18.275Q16.475 18.7 15.825 18.7ZM7.275 15.65H13.975Q14.25 15.65 14.35 15.425Q14.45 15.2 14.3 15L12.525 12.65Q12.4 12.5 12.213 12.5Q12.025 12.5 11.9 12.65L9.725 15.35L8.45 13.875Q8.325 13.725 8.138 13.725Q7.95 13.725 7.825 13.9L6.975 15Q6.825 15.2 6.925 15.425Q7.025 15.65 7.275 15.65Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackRoundedW100Filled.displayName = 'AmauiIconMaterialVideoCameraBackRoundedW100Filled';

export default IconMaterialVideoCameraBackRoundedW100Filled;
