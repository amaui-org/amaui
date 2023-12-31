import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPerformanceMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PerformanceMaxW100Filled'

      short_name='PerformanceMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm414-105 177-177-19-20-158 158-146-146-163 163 19 20 144-144 146 146Zm1-173 21-47 48-23-48-22-21-48-23 48-48 22 48 23 23 47Z"/>
    </Icon>
  );
});

IconMaterialPerformanceMaxW100Filled.displayName = 'AmauiIconMaterialPerformanceMaxW100Filled';

export default IconMaterialPerformanceMaxW100Filled;
