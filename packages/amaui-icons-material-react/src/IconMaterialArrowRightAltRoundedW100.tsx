import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightAltRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltRoundedW100'
      short_name='ArrowRightAlt'

      {...props}
    >
      <path d="M13.875 16.85Q13.75 16.725 13.75 16.6Q13.75 16.475 13.875 16.35L17.875 12.35H5.125Q4.975 12.35 4.875 12.25Q4.775 12.15 4.775 12Q4.775 11.85 4.875 11.75Q4.975 11.65 5.125 11.65H17.875L13.85 7.625Q13.75 7.525 13.75 7.4Q13.75 7.275 13.875 7.15Q14 7.025 14.125 7.025Q14.25 7.025 14.375 7.15L18.7 11.475Q18.825 11.6 18.875 11.725Q18.925 11.85 18.925 12Q18.925 12.15 18.875 12.275Q18.825 12.4 18.7 12.525L14.35 16.875Q14.275 16.975 14.137 16.975Q14 16.975 13.875 16.85Z"/>
    </Icon>
  );
});

IconMaterialArrowRightAltRoundedW100.displayName = 'AmauiIconMaterialArrowRightAltRoundedW100';

export default IconMaterialArrowRightAltRoundedW100;
