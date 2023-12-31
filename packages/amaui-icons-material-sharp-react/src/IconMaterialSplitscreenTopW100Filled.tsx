import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenTopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenTopW100Filled'

      short_name='SplitscreenTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-540v-216h616v216H172Zm0 336v-216h616v216H172Zm28-28h560v-160H200v160Zm0-160h560v160H200v-160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenTopW100Filled.displayName = 'AmauiIconMaterialSplitscreenTopW100Filled';

export default IconMaterialSplitscreenTopW100Filled;
