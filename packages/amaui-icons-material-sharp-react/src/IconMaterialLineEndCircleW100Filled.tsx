import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndCircleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndCircleW100Filled'

      short_name='LineEndCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 15.95q-1.575 0-2.688-1.038-1.112-1.037-1.237-2.562H3.4v-.7h8.675q.125-1.525 1.237-2.563Q14.425 8.05 16 8.05q1.65 0 2.8 1.15t1.15 2.8q0 1.65-1.15 2.8T16 15.95Z"/>
    </Icon>
  );
});

IconMaterialLineEndCircleW100Filled.displayName = 'AmauiIconMaterialLineEndCircleW100Filled';

export default IconMaterialLineEndCircleW100Filled;
