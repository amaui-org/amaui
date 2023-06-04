import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowW100'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.7V3.3h17.4v17.4Zm8.35-9.05V4H4v7.65Zm0 .7H4V20h7.65Zm.7 0V20H20v-7.65Zm0-.7H20V4h-7.65Z"/>
    </Icon>
  );
});

IconMaterialWindowW100.displayName = 'AmauiIconMaterialWindowW100';

export default IconMaterialWindowW100;
