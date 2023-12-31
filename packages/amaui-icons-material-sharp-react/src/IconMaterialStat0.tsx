import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat0 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat0'

      short_name='Stat0'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200 200-480l280-280 280 280-280 280Zm0-114 166-166-166-166-166 166 166 166Zm0-166Z"/>
    </Icon>
  );
});

IconMaterialStat0.displayName = 'AmauiIconMaterialStat0';

export default IconMaterialStat0;
