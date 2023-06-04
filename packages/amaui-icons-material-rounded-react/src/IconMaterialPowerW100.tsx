import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerW100'

      short_name='Power'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.2 19h1.6v-2.15l3.2-3.2V9.8q0-.3-.25-.55Q15.5 9 15.2 9H8.8q-.3 0-.55.25Q8 9.5 8 9.8v3.85l3.2 3.2Zm-.7-1.85L7.75 14.4q-.2-.2-.325-.488-.125-.287-.125-.587V9.8q0-.625.438-1.063Q8.175 8.3 8.8 8.3h1.3l-.35.35v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V8.3h3.1V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4l-.35-.35h1.3q.625 0 1.062.437.438.438.438 1.063v3.525q0 .3-.125.587-.125.288-.325.488l-2.75 2.75v1.8q0 .325-.212.537-.213.213-.538.213h-1.5q-.325 0-.537-.213-.213-.212-.213-.537ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialPowerW100.displayName = 'AmauiIconMaterialPowerW100';

export default IconMaterialPowerW100;
