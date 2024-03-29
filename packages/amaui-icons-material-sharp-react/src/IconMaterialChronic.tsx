import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChronic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chronic'

      short_name='Chronic'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m520 672 56-56-96-96V336h-80v216l120 120ZM368 807q16-48 56.5-79.5T518 696h152q24-34 37-74.5t13-85.5q0-117-81.5-198.5T440 256q-117 0-198.5 81.5T160 536q0 98 58.5 172.5T368 807Zm152 209q-58 0-102-36.5T363 888q-122-26-202.5-124T80 536q0-150 105-255t255-105q150 0 255 105t105 255q0 43-9.5 83.5T763 696q66 0 111.5 47T920 856q0 66-47 113t-113 47H520Zm-80-485Zm200 325Zm-120 80h240q33 0 56.5-23.5T840 856q0-33-23.5-56.5T760 776H520q-33 0-56.5 23.5T440 856q0 33 23.5 56.5T520 936Zm0-40q-17 0-28.5-11.5T480 856q0-17 11.5-28.5T520 816q17 0 28.5 11.5T560 856q0 17-11.5 28.5T520 896Zm120 0q-17 0-28.5-11.5T600 856q0-17 11.5-28.5T640 816q17 0 28.5 11.5T680 856q0 17-11.5 28.5T640 896Zm120 0q-17 0-28.5-11.5T720 856q0-17 11.5-28.5T760 816q17 0 28.5 11.5T800 856q0 17-11.5 28.5T760 896Z"/>
    </Icon>
  );
});

IconMaterialChronic.displayName = 'AmauiIconMaterialChronic';

export default IconMaterialChronic;
