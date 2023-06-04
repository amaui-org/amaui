import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMergeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeW100Filled'

      short_name='Merge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.4 19.7-.475-.475 4.65-4.65q.65-.65.863-1.125.212-.475.212-1.4V5.6L9.375 7.875 8.9 7.4 12 4.3l3.1 3.1-.475.475L12.35 5.6v6.45q0 .925.238 1.425.237.5.887 1.15l4.6 4.6-.475.475-5.6-5.6Z"/>
    </Icon>
  );
});

IconMaterialMergeW100Filled.displayName = 'AmauiIconMaterialMergeW100Filled';

export default IconMaterialMergeW100Filled;
