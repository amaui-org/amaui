import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenFilled'

      short_name='Splitscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 11V2h16v9Zm0 11v-9h16v9Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenFilled.displayName = 'AmauiIconMaterialSplitscreenFilled';

export default IconMaterialSplitscreenFilled;
