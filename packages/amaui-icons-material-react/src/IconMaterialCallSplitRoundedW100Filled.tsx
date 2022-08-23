import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSplitRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitRoundedW100Filled'
      short_name='CallSplit'

      {...props}
    >
      <path d="M13.95 10.55 13.45 10.05 18.15 5.35H15Q14.85 5.35 14.75 5.25Q14.65 5.15 14.65 5Q14.65 4.85 14.75 4.75Q14.85 4.65 15 4.65H18.6Q18.925 4.65 19.138 4.862Q19.35 5.075 19.35 5.4V9Q19.35 9.15 19.25 9.25Q19.15 9.35 19 9.35Q18.85 9.35 18.75 9.25Q18.65 9.15 18.65 9V5.85ZM12 19.35Q11.85 19.35 11.75 19.25Q11.65 19.15 11.65 19V12.1L5.35 5.85V9Q5.35 9.15 5.25 9.25Q5.15 9.35 5 9.35Q4.85 9.35 4.75 9.25Q4.65 9.15 4.65 9V5.4Q4.65 5.075 4.863 4.862Q5.075 4.65 5.4 4.65H9Q9.15 4.65 9.25 4.75Q9.35 4.85 9.35 5Q9.35 5.15 9.25 5.25Q9.15 5.35 9 5.35H5.85L12.35 11.8V19Q12.35 19.15 12.25 19.25Q12.15 19.35 12 19.35Z"/>
    </Icon>
  );
});

IconMaterialCallSplitRoundedW100Filled.displayName = 'AmauiIconMaterialCallSplitRoundedW100Filled';

export default IconMaterialCallSplitRoundedW100Filled;
