import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeRoundedW100Filled'
      short_name='Landscape'

      {...props}
    >
      <path d="M4.975 16.7Q4.5 16.7 4.3 16.288Q4.1 15.875 4.375 15.5L6.525 12.6Q6.75 12.3 7.125 12.3Q7.5 12.3 7.725 12.6L9.675 15.175Q9.925 15.525 10.325 15.588Q10.725 15.65 11.075 15.375Q11.425 15.1 11.488 14.7Q11.55 14.3 11.275 13.95L10.525 12.95L13.525 8.95Q13.75 8.65 14.125 8.65Q14.5 8.65 14.725 8.95L19.625 15.5Q19.9 15.875 19.7 16.288Q19.5 16.7 19.025 16.7Z"/>
    </Icon>
  );
});

IconMaterialLandscapeRoundedW100Filled.displayName = 'AmauiIconMaterialLandscapeRoundedW100Filled';

export default IconMaterialLandscapeRoundedW100Filled;
