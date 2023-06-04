import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMergeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMergeW100Filled'

      short_name='CallMerge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 18.85q-.125-.125-.125-.25t.125-.25l4.5-4.5v-8.6L8.625 8.275q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l3.325-3.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l3.35 3.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-3-3v8.9l-4.725 4.725q-.1.1-.225.1t-.25-.125Zm9.2 0L13.4 15.9l.5-.5 2.975 2.975q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialCallMergeW100Filled.displayName = 'AmauiIconMaterialCallMergeW100Filled';

export default IconMaterialCallMergeW100Filled;
