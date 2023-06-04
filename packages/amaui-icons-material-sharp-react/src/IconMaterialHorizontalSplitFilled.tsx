import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitFilled'

      short_name='HorizontalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19v-6h18v6Zm0-8V9h18v2Zm0-4V5h18v2Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplitFilled.displayName = 'AmauiIconMaterialHorizontalSplitFilled';

export default IconMaterialHorizontalSplitFilled;
