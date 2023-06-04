import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoving = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Moving'

      short_name='Moving'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 18 2 16.6l5.3-5.3q.875-.875 2.125-.875t2.125.875l1.15 1.15q.3.3.713.3.412 0 .712-.3L18.575 8H16V6h6v6h-2V9.425l-4.475 4.45q-.875.875-2.125.875t-2.125-.875L10.1 12.7q-.275-.275-.7-.275-.425 0-.7.275Z"/>
    </Icon>
  );
});

IconMaterialMoving.displayName = 'AmauiIconMaterialMoving';

export default IconMaterialMoving;
