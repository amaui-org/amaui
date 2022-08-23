import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardRoundedW100Filled'
      short_name='Forward'

      {...props}
    >
      <path d="M4.125 18.35Q3.975 18.35 3.875 18.25Q3.775 18.15 3.775 18V15Q3.775 13.2 5.05 11.925Q6.325 10.65 8.125 10.65H18.875L14.85 6.625Q14.75 6.525 14.75 6.4Q14.75 6.275 14.875 6.15Q15 6.025 15.125 6.025Q15.25 6.025 15.375 6.15L19.7 10.475Q19.825 10.6 19.875 10.725Q19.925 10.85 19.925 11Q19.925 11.15 19.875 11.275Q19.825 11.4 19.7 11.525L15.35 15.875Q15.25 15.975 15.125 15.975Q15 15.975 14.875 15.85Q14.75 15.725 14.75 15.6Q14.75 15.475 14.875 15.35L18.875 11.35H8.125Q6.6 11.35 5.538 12.412Q4.475 13.475 4.475 15V18Q4.475 18.15 4.375 18.25Q4.275 18.35 4.125 18.35Z"/>
    </Icon>
  );
});

IconMaterialForwardRoundedW100Filled.displayName = 'AmauiIconMaterialForwardRoundedW100Filled';

export default IconMaterialForwardRoundedW100Filled;
