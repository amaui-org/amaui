import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeRounded'
      short_name='Landscape'

      {...props}
    >
      <path d="M3 18Q2.375 18 2.1 17.45Q1.825 16.9 2.2 16.4L6.2 11.075Q6.5 10.675 7 10.675Q7.5 10.675 7.8 11.075L11.5 16Q11.875 16 12.137 16Q12.4 16 12.775 16Q13.15 16 13.4 16Q13.65 16 14.025 16H19L14 9.35L11.5 12.65L10.25 11L13.2 7.075Q13.5 6.675 14 6.675Q14.5 6.675 14.8 7.075L21.8 16.4Q22.175 16.9 21.9 17.45Q21.625 18 21 18ZM14.025 16ZM5 16H9L7 13.325ZM5 16H7H9Z"/>
    </Icon>
  );
});

IconMaterialLandscapeRounded.displayName = 'AmauiIconMaterialLandscapeRounded';

export default IconMaterialLandscapeRounded;
