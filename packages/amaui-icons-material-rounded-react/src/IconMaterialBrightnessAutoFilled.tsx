import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoFilled'

      short_name='BrightnessAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.925 7.75-2.75 7.225q-.15.35.075.687.225.338.625.338.25 0 .437-.137.188-.138.263-.363l.625-1.8h3.65l.625 1.825q.075.225.263.35.187.125.412.125.375 0 .588-.312.212-.313.087-.663l-2.75-7.275q-.125-.35-.425-.55-.3-.2-.65-.2-.35 0-.65.2-.3.2-.425.55Zm-.275 4.65 1.3-3.75h.1l1.3 3.75Zm-2 7.6H6q-.825 0-1.412-.587Q4 18.825 4 18v-2.65L2.075 13.4Q1.5 12.825 1.5 12t.575-1.4L4 8.65V6q0-.825.588-1.412Q5.175 4 6 4h2.65l1.95-1.925Q11.175 1.5 12 1.5t1.4.575L15.35 4H18q.825 0 1.413.588Q20 5.175 20 6v2.65l1.925 1.95q.575.575.575 1.4t-.575 1.4L20 15.35V18q0 .825-.587 1.413Q18.825 20 18 20h-2.65l-1.95 1.925q-.575.575-1.4.575t-1.4-.575Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoFilled.displayName = 'AmauiIconMaterialBrightnessAutoFilled';

export default IconMaterialBrightnessAutoFilled;
