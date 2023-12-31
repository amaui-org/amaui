import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenTopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenTopFilled'

      short_name='SplitscreenTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-520v-320h720v320H120Zm0 400v-320h720v320H120Zm80-80h560v-160H200v160Zm0-160h560v160H200v-160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenTopFilled.displayName = 'AmauiIconMaterialSplitscreenTopFilled';

export default IconMaterialSplitscreenTopFilled;
