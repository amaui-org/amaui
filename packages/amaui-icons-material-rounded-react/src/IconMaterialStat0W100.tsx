import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat0W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat0W100'

      short_name='Stat0'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-274 274-480l206-206 206 206-206 206Zm0-40 166-166-166-166-166 166 166 166Zm0-166Z"/>
    </Icon>
  );
});

IconMaterialStat0W100.displayName = 'AmauiIconMaterialStat0W100';

export default IconMaterialStat0W100;
