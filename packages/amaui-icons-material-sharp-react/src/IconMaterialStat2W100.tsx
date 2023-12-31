import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat2W100'

      short_name='Stat2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-260-20-20 204-204 204 204-20 20-184-184-184 184Zm0-240-20-20 204-204 204 204-20 20-184-184-184 184Z"/>
    </Icon>
  );
});

IconMaterialStat2W100.displayName = 'AmauiIconMaterialStat2W100';

export default IconMaterialStat2W100;
