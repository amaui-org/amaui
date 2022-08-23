import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeRoundedW100'
      short_name='Landscape'

      {...props}
    >
      <path d="M4.975 16.7Q4.5 16.7 4.3 16.288Q4.1 15.875 4.375 15.5L6.525 12.6Q6.75 12.3 7.125 12.3Q7.5 12.3 7.725 12.6L10.275 16Q10.65 16 10.913 16Q11.175 16 11.55 16Q11.925 16 12.188 16Q12.45 16 12.825 16H19.125L14.125 9.35L10.975 13.55L10.525 12.95L13.525 8.95Q13.75 8.65 14.125 8.65Q14.5 8.65 14.725 8.95L19.625 15.5Q19.9 15.875 19.7 16.288Q19.5 16.7 19.025 16.7ZM12.825 16ZM4.875 16H9.4L7.125 12.95ZM4.875 16H7.125H9.4Z"/>
    </Icon>
  );
});

IconMaterialLandscapeRoundedW100.displayName = 'AmauiIconMaterialLandscapeRoundedW100';

export default IconMaterialLandscapeRoundedW100;
