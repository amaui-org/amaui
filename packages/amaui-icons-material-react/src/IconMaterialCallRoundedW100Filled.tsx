import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallRoundedW100Filled'
      short_name='Call'

      {...props}
    >
      <path d="M18.6 19.55Q16.175 19.55 13.638 18.25Q11.1 16.95 9.038 14.887Q6.975 12.825 5.663 10.3Q4.35 7.775 4.35 5.35Q4.35 4.9 4.65 4.6Q4.95 4.3 5.4 4.3H7.4Q7.85 4.3 8.162 4.562Q8.475 4.825 8.575 5.25L9.025 7.3Q9.1 7.7 9.012 8.025Q8.925 8.35 8.65 8.575L6.55 10.5Q7.95 12.85 9.675 14.55Q11.4 16.25 13.75 17.55L15.8 15.4Q16.075 15.125 16.363 15.037Q16.65 14.95 17 15.025L18.7 15.375Q19.125 15.475 19.388 15.788Q19.65 16.1 19.65 16.55V18.5Q19.65 18.95 19.35 19.25Q19.05 19.55 18.6 19.55Z"/>
    </Icon>
  );
});

IconMaterialCallRoundedW100Filled.displayName = 'AmauiIconMaterialCallRoundedW100Filled';

export default IconMaterialCallRoundedW100Filled;
