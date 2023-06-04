import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCellMergeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellMergeW100Filled'

      short_name='CellMerge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-4.7h.7v4h4v.7Zm12 0v-.7h4v-4h.7v4.7ZM7.175 14.9l-.5-.475L8.75 12.35h-6.1v-.7h6.1L6.675 9.575l.5-.475 2.9 2.9Zm9.65 0-2.9-2.9 2.9-2.9.5.475-2.075 2.075h6.1v.7h-6.1l2.075 2.075ZM3.65 8.35v-4.7h4.7v.7h-4v4Zm16 0v-4h-4v-.7h4.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialCellMergeW100Filled.displayName = 'AmauiIconMaterialCellMergeW100Filled';

export default IconMaterialCellMergeW100Filled;
