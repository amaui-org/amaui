import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthEastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastW100Filled'

      short_name='SouthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 18.35v-.7h7.5L4.9 5.4l.5-.5 12.25 12.25v-7.5h.7v8.7Z"/>
    </Icon>
  );
});

IconMaterialSouthEastW100Filled.displayName = 'AmauiIconMaterialSouthEastW100Filled';

export default IconMaterialSouthEastW100Filled;
