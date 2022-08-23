import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultRoundedW100'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M5 19H19V5H5ZM5 19.7Q4.725 19.7 4.513 19.487Q4.3 19.275 4.3 19V5Q4.3 4.725 4.513 4.512Q4.725 4.3 5 4.3H19Q19.275 4.3 19.488 4.512Q19.7 4.725 19.7 5V19Q19.7 19.275 19.488 19.487Q19.275 19.7 19 19.7ZM8.15 15.85Q8.25 15.95 8.4 15.95Q8.55 15.95 8.65 15.85L12 12.475L15.35 15.85Q15.45 15.95 15.6 15.95Q15.75 15.95 15.85 15.85Q15.95 15.75 15.95 15.6Q15.95 15.45 15.85 15.35L12.475 12L15.85 8.65Q15.95 8.55 15.95 8.4Q15.95 8.25 15.85 8.15Q15.75 8.05 15.6 8.05Q15.45 8.05 15.35 8.15L12 11.525L8.65 8.15Q8.55 8.05 8.4 8.05Q8.25 8.05 8.15 8.15Q8.05 8.25 8.05 8.4Q8.05 8.55 8.15 8.65L11.525 12L8.15 15.35Q8.05 15.45 8.05 15.6Q8.05 15.75 8.15 15.85ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultRoundedW100.displayName = 'AmauiIconMaterialDisabledByDefaultRoundedW100';

export default IconMaterialDisabledByDefaultRoundedW100;
