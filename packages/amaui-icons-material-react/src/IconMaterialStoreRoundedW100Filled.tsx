import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStoreRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StoreRoundedW100Filled'
      short_name='Store'

      {...props}
    >
      <path d="M4.9 5.35Q4.75 5.35 4.65 5.25Q4.55 5.15 4.55 5Q4.55 4.85 4.65 4.75Q4.75 4.65 4.9 4.65H19.1Q19.25 4.65 19.35 4.75Q19.45 4.85 19.45 5Q19.45 5.15 19.35 5.25Q19.25 5.35 19.1 5.35ZM5.4 19.35Q5.075 19.35 4.863 19.138Q4.65 18.925 4.65 18.6V13.35H4.125Q3.775 13.35 3.538 13.062Q3.3 12.775 3.4 12.425L4.4 8.225Q4.45 7.975 4.662 7.812Q4.875 7.65 5.15 7.65H18.85Q19.125 7.65 19.337 7.812Q19.55 7.975 19.6 8.225L20.6 12.425Q20.7 12.775 20.463 13.062Q20.225 13.35 19.875 13.35H19.35V19Q19.35 19.15 19.25 19.25Q19.15 19.35 19 19.35Q18.85 19.35 18.75 19.25Q18.65 19.15 18.65 19V13.35H13.35V18.6Q13.35 18.925 13.138 19.138Q12.925 19.35 12.6 19.35ZM5.35 18.65H12.65V13.35H5.35Z"/>
    </Icon>
  );
});

IconMaterialStoreRoundedW100Filled.displayName = 'AmauiIconMaterialStoreRoundedW100Filled';

export default IconMaterialStoreRoundedW100Filled;
