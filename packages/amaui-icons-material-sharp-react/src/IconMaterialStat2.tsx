import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStat2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stat2'

      short_name='Stat2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m296-224-56-56 240-240 240 240-56 56-184-183-184 183Zm0-240-56-56 240-240 240 240-56 56-184-183-184 183Z"/>
    </Icon>
  );
});

IconMaterialStat2.displayName = 'AmauiIconMaterialStat2';

export default IconMaterialStat2;
