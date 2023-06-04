import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dataset'

      short_name='Dataset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Zm2-8h4V7H7Zm6 0h4V7h-4Zm-6 6h4v-4H7Zm6 0h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialDataset.displayName = 'AmauiIconMaterialDataset';

export default IconMaterialDataset;
