import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepW100Filled'

      short_name='Keep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m588-458 58 58v28H494v188l-14 14-14-14v-188H314v-28l58-58v-302h-40v-28h296v28h-40v302Z"/>
    </Icon>
  );
});

IconMaterialKeepW100Filled.displayName = 'AmauiIconMaterialKeepW100Filled';

export default IconMaterialKeepW100Filled;
