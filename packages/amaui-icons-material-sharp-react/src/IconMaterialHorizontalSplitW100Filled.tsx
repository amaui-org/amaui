import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitW100Filled'

      short_name='HorizontalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 17.7v-6h15.4v6Zm0-8V9h15.4v.7Zm0-2.7v-.7h15.4V7Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplitW100Filled.displayName = 'AmauiIconMaterialHorizontalSplitW100Filled';

export default IconMaterialHorizontalSplitW100Filled;
