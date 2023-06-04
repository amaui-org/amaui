import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerW100Filled'

      short_name='Power'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 17.15 7.75 14.4q-.225-.225-.337-.5-.113-.275-.113-.575V9.8q0-.625.438-1.063Q8.175 8.3 8.8 8.3h1.3l-.35.35v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V8.3h3.1V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4l-.35-.35h1.3q.625 0 1.062.437.438.438.438 1.063v3.525q0 .3-.113.575-.112.275-.337.5l-2.75 2.75v1.8q0 .325-.212.537-.213.213-.538.213h-1.5q-.325 0-.537-.213-.213-.212-.213-.537Z"/>
    </Icon>
  );
});

IconMaterialPowerW100Filled.displayName = 'AmauiIconMaterialPowerW100Filled';

export default IconMaterialPowerW100Filled;
