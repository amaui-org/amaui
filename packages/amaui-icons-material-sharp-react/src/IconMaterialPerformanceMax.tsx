import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerformanceMax = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PerformanceMax'

      short_name='PerformanceMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Zm386-40 214-214-56-57-158 158-146-146-200 200 56 57 144-144 146 146Zm4-220 28-62 62-28-62-28-28-62-28 62-62 28 62 28 28 62Z"/>
    </Icon>
  );
});

IconMaterialPerformanceMax.displayName = 'AmauiIconMaterialPerformanceMax';

export default IconMaterialPerformanceMax;
