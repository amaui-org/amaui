import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoffeeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeFilled'

      short_name='Coffee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 18q-2.9 0-4.95-2.05Q4 13.9 4 11V3h14.5q1.45 0 2.475 1.025Q22 5.05 22 6.5q0 1.45-1.025 2.475Q19.95 10 18.5 10H18v1q0 2.9-2.05 4.95Q13.9 18 11 18ZM6 8h10V5H6Zm12 0h.5q.625 0 1.062-.438Q20 7.125 20 6.5t-.438-1.062Q19.125 5 18.5 5H18ZM4 21v-2h16v2Z"/>
    </Icon>
  );
});

IconMaterialCoffeeFilled.displayName = 'AmauiIconMaterialCoffeeFilled';

export default IconMaterialCoffeeFilled;
