import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMergeTypeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeTypeW100Filled'

      short_name='MergeType'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.35 18.85-4.7-4.7v-8.9L8.625 8.275q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l3.325-3.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l3.35 3.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-3-3v8.6l4.525 4.525q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Zm-9.2 0q-.125-.125-.125-.25t.125-.25l2.95-2.95.5.5-2.975 2.975q-.1.1-.225.1t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialMergeTypeW100Filled.displayName = 'AmauiIconMaterialMergeTypeW100Filled';

export default IconMaterialMergeTypeW100Filled;
