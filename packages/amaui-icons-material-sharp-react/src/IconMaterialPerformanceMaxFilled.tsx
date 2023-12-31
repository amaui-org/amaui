import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerformanceMaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PerformanceMaxFilled'

      short_name='PerformanceMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm466-120 214-214-56-57-158 158-146-146-200 200 56 57 144-144 146 146Zm4-220 28-62 62-28-62-28-28-62-28 62-62 28 62 28 28 62Z"/>
    </Icon>
  );
});

IconMaterialPerformanceMaxFilled.displayName = 'AmauiIconMaterialPerformanceMaxFilled';

export default IconMaterialPerformanceMaxFilled;
