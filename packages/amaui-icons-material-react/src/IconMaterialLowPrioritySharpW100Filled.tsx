import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLowPrioritySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPrioritySharpW100Filled'
      short_name='LowPriority'

      {...props}
    >
      <path d="M21.35 5.65V6.35H14.65V5.65ZM21.35 11.15V11.85H14.65V11.15ZM21.35 16.65V17.35H14.65V16.65ZM11.15 5.65V6.35H8.5Q6.35 6.35 4.85 7.85Q3.35 9.35 3.35 11.5Q3.35 13.65 4.85 15.15Q6.35 16.65 8.5 16.65H9.8L7.85 14.7L8.35 14.2L11.15 17L8.35 19.8L7.85 19.3L9.8 17.35H8.5Q6.075 17.35 4.363 15.637Q2.65 13.925 2.65 11.5Q2.65 9.075 4.363 7.362Q6.075 5.65 8.5 5.65Z"/>
    </Icon>
  );
});

IconMaterialLowPrioritySharpW100Filled.displayName = 'AmauiIconMaterialLowPrioritySharpW100Filled';

export default IconMaterialLowPrioritySharpW100Filled;
