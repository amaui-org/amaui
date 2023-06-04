import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenW100'

      short_name='Splitscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 10.3h12V4H6Zm-.7.7V3.3h13.4V11Zm.7 9h12v-6.3H6Zm-.7.7V13h13.4v7.7ZM6 10.3V4v6.3ZM6 20v-6.3V20Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenW100.displayName = 'AmauiIconMaterialSplitscreenW100';

export default IconMaterialSplitscreenW100;
