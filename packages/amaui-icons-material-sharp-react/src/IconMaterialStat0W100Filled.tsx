import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat0W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat0W100Filled'

      short_name='Stat0'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-274 274-480l206-206 206 206-206 206Z"/>
    </Icon>
  );
});

IconMaterialStat0W100Filled.displayName = 'AmauiIconMaterialStat0W100Filled';

export default IconMaterialStat0W100Filled;
