import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOrderPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrderPlayW100'

      short_name='OrderPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.95 19.925 2.825-1.775-2.825-1.775ZM7 8.65h10v-.7H7Zm11 13.2q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85ZM4.3 20.4V4.3h15.4v7.225q-.175-.05-.337-.087-.163-.038-.363-.063V5H5v14.05h6.425q.05.3.113.6.062.3.187.575L10.7 19.6l-1.3.8-1.3-.8-1.3.8-1.3-.8ZM7 16.05h4.6q.05-.2.113-.362.062-.163.137-.338H7Zm0-3.7h7.375q.35-.225.7-.4.35-.175.75-.3H7Zm-2 6.7V5v14.05Z"/>
    </Icon>
  );
});

IconMaterialOrderPlayW100.displayName = 'AmauiIconMaterialOrderPlayW100';

export default IconMaterialOrderPlayW100;
