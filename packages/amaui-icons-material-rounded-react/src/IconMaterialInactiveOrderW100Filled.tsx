import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInactiveOrderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InactiveOrderW100Filled'

      short_name='InactiveOrder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 16.975q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.35q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25Zm1.3 0v2.35q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.35q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25Zm-2-8.325q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-9.3q-.15 0-.25.1T7 8.3q0 .15.1.25t.25.1ZM18 21.85q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85ZM5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v5.725q-.95-.275-1.937-.238-.988.038-1.938.363H7.35q-.15 0-.25.1T7 12q0 .15.1.25t.25.1h7.025q-.85.55-1.488 1.312-.637.763-1.037 1.688h-4.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h4.25q-.125.45-.2.912-.075.463-.075.963 0 .575.1 1.162.1.588.3 1.138l-.825-.5q-.1-.05-.2-.05t-.2.05l-.9.55q-.1.05-.2.05t-.2-.05l-.9-.55q-.1-.05-.2-.05t-.2.05l-.9.55q-.1.05-.2.05t-.2-.05l-.9-.55q-.1-.05-.2-.05t-.2.05l-.775.55q-.075.05-.225.1V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3Z"/>
    </Icon>
  );
});

IconMaterialInactiveOrderW100Filled.displayName = 'AmauiIconMaterialInactiveOrderW100Filled';

export default IconMaterialInactiveOrderW100Filled;
