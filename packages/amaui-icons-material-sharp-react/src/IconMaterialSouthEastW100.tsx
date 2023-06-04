import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthEastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastW100'

      short_name='SouthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 18.35v-.7h7.5L4.9 5.4l.5-.5 12.25 12.25v-7.5h.7v8.7Z"/>
    </Icon>
  );
});

IconMaterialSouthEastW100.displayName = 'AmauiIconMaterialSouthEastW100';

export default IconMaterialSouthEastW100;
