import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetailsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsRoundedW100Filled'
      short_name='Details'

      {...props}
    >
      <path d="M5.475 19.7Q5.05 19.7 4.838 19.325Q4.625 18.95 4.825 18.575L11.35 6.85Q11.55 6.45 12 6.45Q12.45 6.45 12.65 6.85L19.175 18.575Q19.375 18.95 19.163 19.325Q18.95 19.7 18.525 19.7ZM5.4 19H11.65V7.75ZM12.35 19H18.6L12.35 7.75Z"/>
    </Icon>
  );
});

IconMaterialDetailsRoundedW100Filled.displayName = 'AmauiIconMaterialDetailsRoundedW100Filled';

export default IconMaterialDetailsRoundedW100Filled;
