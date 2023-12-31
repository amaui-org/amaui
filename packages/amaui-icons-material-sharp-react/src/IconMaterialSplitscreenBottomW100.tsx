import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenBottomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenBottomW100'

      short_name='SplitscreenBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-204v-216h616v216H172Zm0-336v-216h616v216H172Zm588-188H200v160h560v-160ZM200-568v-160 160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenBottomW100.displayName = 'AmauiIconMaterialSplitscreenBottomW100';

export default IconMaterialSplitscreenBottomW100;
