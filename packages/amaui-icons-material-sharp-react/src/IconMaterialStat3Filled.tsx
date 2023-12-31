import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat3Filled'

      short_name='Stat3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-105-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
    </Icon>
  );
});

IconMaterialStat3Filled.displayName = 'AmauiIconMaterialStat3Filled';

export default IconMaterialStat3Filled;
