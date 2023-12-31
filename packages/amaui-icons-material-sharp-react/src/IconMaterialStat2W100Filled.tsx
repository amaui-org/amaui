import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat2W100Filled'

      short_name='Stat2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-260-20-20 204-204 204 204-20 20-184-184-184 184Zm0-240-20-20 204-204 204 204-20 20-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialStat2W100Filled.displayName = 'AmauiIconMaterialStat2W100Filled';

export default IconMaterialStat2W100Filled;
