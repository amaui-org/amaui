import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowPriorityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPriorityW100'

      short_name='LowPriority'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.35 19.8-.5-.5 1.95-1.95H8.5q-2.425 0-4.137-1.713Q2.65 13.925 2.65 11.5t1.713-4.138Q6.075 5.65 8.5 5.65h2.65v.7H8.5q-2.15 0-3.65 1.5t-1.5 3.65q0 2.15 1.5 3.65t3.65 1.5h1.3L7.85 14.7l.5-.5 2.8 2.8Zm6.3-2.45v-.7h6.7v.7Zm0-5.5v-.7h6.7v.7Zm0-5.5v-.7h6.7v.7Z"/>
    </Icon>
  );
});

IconMaterialLowPriorityW100.displayName = 'AmauiIconMaterialLowPriorityW100';

export default IconMaterialLowPriorityW100;
