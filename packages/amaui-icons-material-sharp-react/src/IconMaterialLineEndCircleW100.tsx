import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndCircleW100'

      short_name='LineEndCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 15.25q1.35 0 2.3-.95.95-.95.95-2.3 0-1.35-.95-2.3-.95-.95-2.3-.95-1.35 0-2.3.95-.95.95-.95 2.3 0 1.35.95 2.3.95.95 2.3.95Zm0 .7q-1.575 0-2.688-1.038-1.112-1.037-1.237-2.562H3.4v-.7h8.675q.125-1.525 1.237-2.563Q14.425 8.05 16 8.05q1.65 0 2.8 1.15t1.15 2.8q0 1.65-1.15 2.8T16 15.95ZM16 12Z"/>
    </Icon>
  );
});

IconMaterialLineEndCircleW100.displayName = 'AmauiIconMaterialLineEndCircleW100';

export default IconMaterialLineEndCircleW100;
