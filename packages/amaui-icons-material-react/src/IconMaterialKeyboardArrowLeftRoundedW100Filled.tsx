import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowLeftRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowLeftRoundedW100Filled'
      short_name='KeyboardArrowLeft'

      {...props}
    >
      <path d="M13.75 16.85 9.425 12.525Q9.3 12.4 9.25 12.262Q9.2 12.125 9.2 12Q9.2 11.85 9.25 11.725Q9.3 11.6 9.425 11.475L13.75 7.15Q13.875 7.025 14 7.025Q14.125 7.025 14.25 7.15Q14.375 7.275 14.375 7.4Q14.375 7.525 14.25 7.65L9.9 12L14.25 16.35Q14.375 16.475 14.375 16.6Q14.375 16.725 14.25 16.85Q14.125 16.975 14 16.975Q13.875 16.975 13.75 16.85Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowLeftRoundedW100Filled.displayName = 'AmauiIconMaterialKeyboardArrowLeftRoundedW100Filled';

export default IconMaterialKeyboardArrowLeftRoundedW100Filled;
