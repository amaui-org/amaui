import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabled'

      short_name='DesktopAccessDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.175 3.175 5 5H4v11h9.2L.7 3.5l1.4-1.4 19.8 19.8-1.4 1.4-5.3-5.3H14v2h2v2H8v-2h2v-2H2V3.175ZM20.7 17.85 18.85 16H20V5H7.85l-2-2H22v14.85Zm-7.35-7.35Zm-4.75.9Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabled.displayName = 'AmauiIconMaterialDesktopAccessDisabled';

export default IconMaterialDesktopAccessDisabled;
