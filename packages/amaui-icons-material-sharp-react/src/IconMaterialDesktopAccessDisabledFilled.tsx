import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabledFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabledFilled'

      short_name='DesktopAccessDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.175 3.175v2.8L.7 3.5l1.4-1.4 19.8 19.8-1.4 1.4-5.3-5.3H14v2h2v2H8v-2h2v-2H2V3.175ZM20.7 17.85 5.85 3H22v14.85Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabledFilled.displayName = 'AmauiIconMaterialDesktopAccessDisabledFilled';

export default IconMaterialDesktopAccessDisabledFilled;
