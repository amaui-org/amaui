import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestDisplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplayW100Filled'

      short_name='NestDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.35q-2.825 0-4.087-.312-1.263-.313-1.263-.688v-1H4.325q-.65 0-1.1-.487-.45-.488-.4-1.138l.65-7.7q.05-.575.488-.975.437-.4 1.012-.4h14.05q.575 0 1.013.4.437.4.487.975l.65 7.7q.05.65-.4 1.138-.45.487-1.1.487H17.35v1q0 .375-1.262.688-1.263.312-4.088.312Zm-7.65-2.7h15.3q.35 0 .6-.263.25-.262.2-.612l-.65-7.7q-.025-.325-.25-.525t-.55-.2H5q-.325 0-.55.2-.225.2-.25.525l-.65 7.7q-.05.35.2.612.25.263.6.263Z"/>
    </Icon>
  );
});

IconMaterialNestDisplayW100Filled.displayName = 'AmauiIconMaterialNestDisplayW100Filled';

export default IconMaterialNestDisplayW100Filled;
