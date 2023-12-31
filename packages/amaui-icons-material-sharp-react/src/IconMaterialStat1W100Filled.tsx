import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat1W100Filled'

      short_name='Stat1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-380-20-20 204-204 204 204-20 20-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialStat1W100Filled.displayName = 'AmauiIconMaterialStat1W100Filled';

export default IconMaterialStat1W100Filled;
