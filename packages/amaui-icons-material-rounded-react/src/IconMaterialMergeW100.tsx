import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMergeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeW100'

      short_name='Merge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.15 19.475q-.1-.1-.1-.25t.1-.25l4.425-4.4q.65-.65.863-1.125.212-.475.212-1.4V5.6L9.625 7.65q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l2.35-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.325q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1L12.35 5.6v6.45q0 .925.238 1.425.237.5.887 1.15l4.375 4.35q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1L12 14.1l-5.35 5.375q-.1.1-.25.1t-.25-.1Z"/>
    </Icon>
  );
});

IconMaterialMergeW100.displayName = 'AmauiIconMaterialMergeW100';

export default IconMaterialMergeW100;
