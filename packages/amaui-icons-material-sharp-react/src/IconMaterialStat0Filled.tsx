import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat0Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat0Filled'

      short_name='Stat0'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200 200-480l280-280 280 280-280 280Z"/>
    </Icon>
  );
});

IconMaterialStat0Filled.displayName = 'AmauiIconMaterialStat0Filled';

export default IconMaterialStat0Filled;
