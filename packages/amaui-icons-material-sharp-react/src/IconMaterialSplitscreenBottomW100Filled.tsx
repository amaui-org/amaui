import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenBottomW100Filled'

      short_name='SplitscreenBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-204v-216h616v216H172Zm0-336v-216h616v216H172Zm588-188H200v160h560v-160Zm0 160H200v-160h560v160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenBottomW100Filled.displayName = 'AmauiIconMaterialSplitscreenBottomW100Filled';

export default IconMaterialSplitscreenBottomW100Filled;
