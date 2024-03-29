import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness4Filled'

      short_name='Brightness4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23.3 8.65 20H4v-4.65L.7 12 4 8.65V4h4.65L12 .7 15.35 4H20v4.65L23.3 12 20 15.35V20h-4.65Zm0-5.3q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6q-.65 0-1.3.125t-1.225.4q1.6.75 2.563 2.237Q13 10.25 13 12t-.962 3.238q-.963 1.487-2.563 2.237.575.275 1.225.4.65.125 1.3.125Z"/>
    </Icon>
  );
});

IconMaterialBrightness4Filled.displayName = 'AmauiIconMaterialBrightness4Filled';

export default IconMaterialBrightness4Filled;
