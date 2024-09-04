import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCallingBar1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingBar1Filled'

      short_name='WifiCallingBar1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM660-520q-17 0-28.5-11.5T620-560q0-17 11.5-28.5T660-600q17 0 28.5 11.5T700-560q0 17-11.5 28.5T660-520Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingBar1Filled.displayName = 'AmauiIconMaterialWifiCallingBar1Filled';

export default IconMaterialWifiCallingBar1Filled;
