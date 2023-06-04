import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCellMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CellMerge'

      short_name='CellMerge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-6h2v4h4v2Zm12 0v-2h4v-4h2v6Zm-7.825-5.175-1.425-1.4L7.175 13H2v-2h5.175L5.75 9.575l1.425-1.4L11 12Zm9.65 0L13 12l3.825-3.825 1.425 1.4L16.825 11H22v2h-5.175l1.425 1.425ZM3 9V3h6v2H5v4Zm16 0V5h-4V3h6v6Z"/>
    </Icon>
  );
});

IconMaterialCellMerge.displayName = 'AmauiIconMaterialCellMerge';

export default IconMaterialCellMerge;
