import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat1Filled'

      short_name='Stat1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
    </Icon>
  );
});

IconMaterialStat1Filled.displayName = 'AmauiIconMaterialStat1Filled';

export default IconMaterialStat1Filled;
