import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataThresholding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholding'

      short_name='DataThresholding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm12.275-2H19v-1.725ZM5.85 19h1.825l3-3H12.8l-3 3h1.6l3-3h2.125l-3 3h1.625l3-3H19V5H5v12.725L6.725 16H8.85Zm1.1-5.7q-.275-.275-.275-.7 0-.425.275-.7l3.025-3.025q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l1.3 1.3L15.65 7.2q.275-.275.687-.288.413-.012.713.288.275.275.275.7 0 .425-.275.7l-3.675 3.7q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212l-1.3-1.3-2.325 2.3q-.275.275-.687.287-.413.013-.713-.287ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialDataThresholding.displayName = 'AmauiIconMaterialDataThresholding';

export default IconMaterialDataThresholding;
