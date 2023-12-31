import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat3W100Filled'

      short_name='Stat3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-140-20-20 204-204 204 204-20 20-184-184-184 184Zm0-240-20-20 204-204 204 204-20 20-184-184-184 184Zm0-240-20-20 204-204 204 204-20 20-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialStat3W100Filled.displayName = 'AmauiIconMaterialStat3W100Filled';

export default IconMaterialStat3W100Filled;
