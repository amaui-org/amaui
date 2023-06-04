import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeW100'

      short_name='AddHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 18.85h.7v-2.5h2.5v-.7h-2.5v-2.5h-.7v2.5h-2.5v.7h2.5Zm.35.85q-1.55 0-2.625-1.075T14.3 16q0-1.55 1.075-2.625T18 12.3q1.55 0 2.625 1.075T21.7 16q0 1.55-1.075 2.625T18 19.7Zm-12.7-2V7.65L12 2.575l6.7 5.075v1.675q-.175-.025-.35-.025H18V8l-6-4.55L6 8v9h5.375q.025.175.063.35.037.175.087.35Zm6.7-7.475Z"/>
    </Icon>
  );
});

IconMaterialAddHomeW100.displayName = 'AmauiIconMaterialAddHomeW100';

export default IconMaterialAddHomeW100;
