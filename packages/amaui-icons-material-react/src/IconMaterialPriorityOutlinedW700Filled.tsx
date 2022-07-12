import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityOutlinedW700Filled'
      short_name='Priority'

      {...props}
    >
      <path d="M9 21.85Q6.15 21.85 4.15 19.85Q2.15 17.85 2.15 15V9Q2.15 6.15 4.15 4.15Q6.15 2.15 9 2.15H15Q17.85 2.15 19.85 4.15Q21.85 6.15 21.85 9V15Q21.85 17.85 19.85 19.85Q17.85 21.85 15 21.85ZM10.925 16.275 17.2 10 15.525 8.325 10.925 12.925 8.725 10.725 7.05 12.4Z"/>
    </Icon>
  )
});

export default IconMaterialPriorityOutlinedW700Filled;
