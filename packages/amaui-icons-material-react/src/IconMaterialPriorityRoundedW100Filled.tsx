import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityRoundedW100Filled'
      short_name='Priority'

      {...props}
    >
      <path d="M9 19.7Q7.05 19.7 5.675 18.325Q4.3 16.95 4.3 15V9Q4.3 7.05 5.675 5.675Q7.05 4.3 9 4.3H15Q16.95 4.3 18.325 5.675Q19.7 7.05 19.7 9V15Q19.7 16.95 18.325 18.325Q16.95 19.7 15 19.7ZM11 15.1 16.1 10 15.6 9.5 11 14.1 8.8 11.9 8.3 12.4Z"/>
    </Icon>
  );
});

export default IconMaterialPriorityRoundedW100Filled;
