import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowRightRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowRightRoundedW100Filled'
      short_name='KeyboardArrowRight'

      {...props}
    >
      <path d="M9.15 16.85Q9.025 16.725 9.025 16.6Q9.025 16.475 9.15 16.35L13.5 12L9.15 7.65Q9.025 7.525 9.025 7.4Q9.025 7.275 9.15 7.15Q9.275 7.025 9.4 7.025Q9.525 7.025 9.65 7.15L13.975 11.475Q14.1 11.6 14.15 11.725Q14.2 11.85 14.2 12Q14.2 12.15 14.15 12.275Q14.1 12.4 13.975 12.525L9.65 16.85Q9.525 16.975 9.4 16.975Q9.275 16.975 9.15 16.85Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowRightRoundedW100Filled.displayName = 'AmauiIconMaterialKeyboardArrowRightRoundedW100Filled';

export default IconMaterialKeyboardArrowRightRoundedW100Filled;
