import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoStableRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableRoundedW100Filled'
      short_name='VideoStable'

      {...props}
    >
      <path d="M14.975 16.25Q15.275 16.35 15.55 16.188Q15.825 16.025 15.9 15.725L17.2 10.725Q17.25 10.425 17.113 10.15Q16.975 9.875 16.675 9.8L9.075 7.75Q8.775 7.65 8.5 7.812Q8.225 7.975 8.15 8.275L6.85 13.225Q6.775 13.525 6.925 13.8Q7.075 14.075 7.375 14.15ZM7.5 13.45 8.85 8.4ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialVideoStableRoundedW100Filled.displayName = 'AmauiIconMaterialVideoStableRoundedW100Filled';

export default IconMaterialVideoStableRoundedW100Filled;
