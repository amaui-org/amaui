import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartCircleW100'

      short_name='LineStartCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 15.25q1.35 0 2.3-.95.95-.95.95-2.3 0-1.35-.95-2.3-.95-.95-2.3-.95-1.35 0-2.3.95-.95.95-.95 2.3 0 1.35.95 2.3.95.95 2.3.95Zm0 .7q-1.65 0-2.8-1.15T4.05 12q0-1.65 1.15-2.8T8 8.05q1.575 0 2.688 1.037 1.112 1.038 1.237 2.563H20.6v.7h-8.675q-.125 1.525-1.237 2.562Q9.575 15.95 8 15.95ZM8 12Z"/>
    </Icon>
  );
});

IconMaterialLineStartCircleW100.displayName = 'AmauiIconMaterialLineStartCircleW100';

export default IconMaterialLineStartCircleW100;
