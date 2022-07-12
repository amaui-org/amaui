import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareArrowsOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrowsOutlinedW700'
      short_name='CompareArrows'

      {...props}
    >
      <path d="M16.775 14.8 10.95 9 16.775 3.2 18.975 5.425 16.975 7.425H23.35V10.575H16.975L18.975 12.575ZM7.225 20.8 13.05 15 7.225 9.2 5.025 11.425 7.025 13.425H0.65V16.575H7.025L5.025 18.575Z"/>
    </Icon>
  )
});

export default IconMaterialCompareArrowsOutlinedW700;
