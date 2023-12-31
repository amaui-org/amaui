import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenBottomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenBottomFilled'

      short_name='SplitscreenBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-320h720v320H120Zm0-400v-320h720v320H120Zm640-240H200v160h560v-160Zm0 160H200v-160h560v160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenBottomFilled.displayName = 'AmauiIconMaterialSplitscreenBottomFilled';

export default IconMaterialSplitscreenBottomFilled;
