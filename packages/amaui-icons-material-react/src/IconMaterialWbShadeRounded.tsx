import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWbShadeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeRounded'
      short_name='WbShade'

      {...props}
    >
      <path d="M19.2 19.7 14.325 14.825Q14.05 14.55 14.05 14.2Q14.05 13.85 14.325 13.575Q14.6 13.3 14.95 13.3Q15.3 13.3 15.575 13.575L20.45 18.45Q20.725 18.725 20.725 19.075Q20.725 19.425 20.45 19.7Q20.175 19.975 19.825 19.975Q19.475 19.975 19.2 19.7ZM15 20Q14.575 20 14.288 19.712Q14 19.425 14 19V17L17 20ZM5 20Q4.575 20 4.287 19.712Q4 19.425 4 19V10H3.2Q2.85 10 2.725 9.7Q2.6 9.4 2.85 9.15L7.65 4.35Q7.7 4.3 8 4.2Q8.05 4.2 8.35 4.35L13.15 9.15Q13.4 9.4 13.275 9.7Q13.15 10 12.8 10H12V19Q12 19.425 11.713 19.712Q11.425 20 11 20ZM7 14H9V10H7Z"/>
    </Icon>
  );
});

IconMaterialWbShadeRounded.displayName = 'AmauiIconMaterialWbShadeRounded';

export default IconMaterialWbShadeRounded;
