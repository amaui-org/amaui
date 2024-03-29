import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataThresholdingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholdingFilled'

      short_name='DataThresholding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm10.15-2h2.125L19 17.275V16h-.85Zm-8.2-5.7q.275.275.7.275.425 0 .7-.275l2.325-2.3 1.3 1.3q.15.15.325.212.175.063.375.063t.375-.063q.175-.062.325-.212l3.675-3.7q.275-.275.287-.688.013-.412-.287-.712-.275-.275-.7-.275-.425 0-.7.275l-2.975 2.975-1.3-1.3q-.15-.15-.325-.213-.175-.062-.375-.062t-.375.062q-.175.063-.325.213L6.95 11.9q-.275.275-.287.687-.013.413.287.713ZM5 19h.85l3-3H6.725L5 17.725V19Zm8.525 0 3-3H14.4l-3 3ZM9.8 19l3-3h-2.125l-3 3Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingFilled.displayName = 'AmauiIconMaterialDataThresholdingFilled';

export default IconMaterialDataThresholdingFilled;
