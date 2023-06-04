import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberNewFilled'

      short_name='FiberNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 15h1.25v-3.5L7.3 15h1.2V9H7.25v3.5L4.75 9H3.5Zm6 0h4v-1.25H11v-1.1h2.5V11.4H11v-1.15h2.5V9h-4Zm5 0h6V9h-1.25v4.5h-1.1V10H16.9v3.5h-1.15V9H14.5ZM1 20V4h22v16Z"/>
    </Icon>
  );
});

IconMaterialFiberNewFilled.displayName = 'AmauiIconMaterialFiberNewFilled';

export default IconMaterialFiberNewFilled;
