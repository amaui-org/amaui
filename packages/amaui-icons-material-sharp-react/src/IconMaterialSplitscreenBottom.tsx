import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenBottom'

      short_name='SplitscreenBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h720v320H120Zm0-400v-320h720v320H120Zm640-240H200v160h560v-160ZM200-600v-160 160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenBottom.displayName = 'AmauiIconMaterialSplitscreenBottom';

export default IconMaterialSplitscreenBottom;
