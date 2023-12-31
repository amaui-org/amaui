import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebTrafficW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebTrafficW100'

      short_name='WebTraffic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-506v-28h120v28H80Zm118 228-20-20 84-84 20 20-84 84Zm64-380-84-84 20-20 84 84-20 20Zm404 420L492-412l-34 106-78-256 260 78-106 38 170 170-38 38ZM406-720v-120h28v120h-28Zm172 62-20-20 84-84 20 20-84 84Z"/>
    </Icon>
  );
});

IconMaterialWebTrafficW100.displayName = 'AmauiIconMaterialWebTrafficW100';

export default IconMaterialWebTrafficW100;
