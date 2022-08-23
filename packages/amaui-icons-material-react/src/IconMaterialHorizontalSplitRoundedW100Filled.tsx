import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitRoundedW100Filled'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M4.625 7Q4.5 7 4.4 6.9Q4.3 6.8 4.3 6.65Q4.3 6.5 4.4 6.4Q4.5 6.3 4.65 6.3H19.375Q19.5 6.3 19.6 6.4Q19.7 6.5 19.7 6.65Q19.7 6.8 19.6 6.9Q19.5 7 19.35 7ZM4.625 9.7Q4.5 9.7 4.4 9.6Q4.3 9.5 4.3 9.35Q4.3 9.2 4.4 9.1Q4.5 9 4.65 9H19.375Q19.5 9 19.6 9.1Q19.7 9.2 19.7 9.35Q19.7 9.5 19.6 9.6Q19.5 9.7 19.35 9.7ZM5.05 17.7Q4.725 17.7 4.513 17.487Q4.3 17.275 4.3 16.95V12.45Q4.3 12.125 4.513 11.912Q4.725 11.7 5.05 11.7H18.95Q19.275 11.7 19.488 11.912Q19.7 12.125 19.7 12.45V16.95Q19.7 17.275 19.488 17.487Q19.275 17.7 18.95 17.7ZM5 17H19V12.4H5ZM5 17V12.4H19V17Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplitRoundedW100Filled.displayName = 'AmauiIconMaterialHorizontalSplitRoundedW100Filled';

export default IconMaterialHorizontalSplitRoundedW100Filled;
