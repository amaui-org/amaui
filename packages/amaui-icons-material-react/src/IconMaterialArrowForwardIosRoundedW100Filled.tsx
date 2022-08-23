import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardIosRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardIosRoundedW100Filled'
      short_name='ArrowForwardIos'

      {...props}
    >
      <path d="M7.575 20.675Q7.4 20.5 7.4 20.25Q7.4 20 7.575 19.825L15.4 12L7.55 4.15Q7.375 3.975 7.375 3.75Q7.375 3.525 7.575 3.325Q7.75 3.15 8 3.15Q8.25 3.15 8.425 3.325L16.575 11.475Q16.7 11.6 16.75 11.725Q16.8 11.85 16.8 12Q16.8 12.15 16.75 12.275Q16.7 12.4 16.575 12.525L8.4 20.7Q8.225 20.875 8 20.875Q7.775 20.875 7.575 20.675Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardIosRoundedW100Filled.displayName = 'AmauiIconMaterialArrowForwardIosRoundedW100Filled';

export default IconMaterialArrowForwardIosRoundedW100Filled;
