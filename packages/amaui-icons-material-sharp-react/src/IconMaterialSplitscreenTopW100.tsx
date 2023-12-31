import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenTopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenTopW100'

      short_name='SplitscreenTop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-540v-216h616v216H172Zm0 336v-216h616v216H172Zm28-28h560v-160H200v160Zm0-160v160-160Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenTopW100.displayName = 'AmauiIconMaterialSplitscreenTopW100';

export default IconMaterialSplitscreenTopW100;
