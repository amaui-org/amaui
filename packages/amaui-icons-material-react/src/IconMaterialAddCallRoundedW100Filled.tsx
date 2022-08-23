import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCallRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCallRoundedW100Filled'
      short_name='AddCall'

      {...props}
    >
      <path d="M16.3 11Q16.15 11 16.05 10.9Q15.95 10.8 15.95 10.65V8H13.3Q13.15 8 13.05 7.9Q12.95 7.8 12.95 7.65Q12.95 7.5 13.05 7.4Q13.15 7.3 13.3 7.3H15.95V4.65Q15.95 4.5 16.05 4.4Q16.15 4.3 16.3 4.3Q16.45 4.3 16.55 4.4Q16.65 4.5 16.65 4.65V7.3H19.3Q19.45 7.3 19.55 7.4Q19.65 7.5 19.65 7.65Q19.65 7.8 19.55 7.9Q19.45 8 19.3 8H16.65V10.65Q16.65 10.8 16.55 10.9Q16.45 11 16.3 11ZM18.6 19.55Q16.175 19.55 13.638 18.25Q11.1 16.95 9.038 14.887Q6.975 12.825 5.663 10.3Q4.35 7.775 4.35 5.35Q4.35 4.9 4.65 4.6Q4.95 4.3 5.4 4.3H7.4Q7.85 4.3 8.162 4.562Q8.475 4.825 8.575 5.25L9.025 7.3Q9.1 7.7 9.012 8.025Q8.925 8.35 8.65 8.575L6.55 10.5Q7.95 12.85 9.675 14.55Q11.4 16.25 13.75 17.55L15.8 15.4Q16.075 15.125 16.363 15.037Q16.65 14.95 17 15.025L18.7 15.375Q19.125 15.475 19.388 15.788Q19.65 16.1 19.65 16.55V18.5Q19.65 18.95 19.35 19.25Q19.05 19.55 18.6 19.55Z"/>
    </Icon>
  );
});

IconMaterialAddCallRoundedW100Filled.displayName = 'AmauiIconMaterialAddCallRoundedW100Filled';

export default IconMaterialAddCallRoundedW100Filled;
