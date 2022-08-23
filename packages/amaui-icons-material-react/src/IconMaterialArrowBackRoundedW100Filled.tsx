import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackRoundedW100Filled'
      short_name='ArrowBack'

      {...props}
    >
      <path d="M11.45 18.75 5.225 12.525Q5.1 12.4 5.05 12.275Q5 12.15 5 12Q5 11.85 5.05 11.725Q5.1 11.6 5.225 11.475L11.475 5.225Q11.575 5.125 11.7 5.125Q11.825 5.125 11.95 5.25Q12.075 5.375 12.075 5.5Q12.075 5.625 11.95 5.75L6.05 11.65H18.35Q18.5 11.65 18.6 11.75Q18.7 11.85 18.7 12Q18.7 12.15 18.6 12.25Q18.5 12.35 18.35 12.35H6.05L11.975 18.275Q12.075 18.375 12.075 18.5Q12.075 18.625 11.95 18.75Q11.825 18.875 11.7 18.875Q11.575 18.875 11.45 18.75Z"/>
    </Icon>
  );
});

IconMaterialArrowBackRoundedW100Filled.displayName = 'AmauiIconMaterialArrowBackRoundedW100Filled';

export default IconMaterialArrowBackRoundedW100Filled;
