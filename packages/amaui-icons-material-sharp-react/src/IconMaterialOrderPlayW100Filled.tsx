import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOrderPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrderPlayW100Filled'

      short_name='OrderPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.95 19.925 2.825-1.775-2.825-1.775ZM7 8.65h10v-.7H7Zm11 13.2q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85ZM4.3 20.4V4.3h15.4v7.225q-.95-.275-1.937-.238-.988.038-1.938.363H7v.7h7.375q-.85.55-1.488 1.312-.637.763-1.037 1.688H7v.7h4.6q-.125.45-.2.912-.075.463-.075.963 0 .575.1 1.162.1.588.3 1.138L10.7 19.6l-1.3.8-1.3-.8-1.3.8-1.3-.8Z"/>
    </Icon>
  );
});

IconMaterialOrderPlayW100Filled.displayName = 'AmauiIconMaterialOrderPlayW100Filled';

export default IconMaterialOrderPlayW100Filled;
