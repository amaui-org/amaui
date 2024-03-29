import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCribFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CribFilled'

      short_name='Crib'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q.5 0 1-.062.5-.063 1-.188V16h-4v3.75q.5.125 1 .188.5.062 1 .062Zm0 2q-1.725 0-3.325-.575t-2.95-1.65q-.35-.275-.362-.7-.013-.425.337-.775.275-.275.663-.275.387 0 .687.25.225.2.463.35.237.15.487.3V16H6q-.825 0-1.412-.588Q4 14.825 4 14V8q0-1.65 1.175-2.825Q6.35 4 8 4h2q.825 0 1.413.588Q12 5.175 12 6v3h6q.825 0 1.413.587Q20 10.175 20 11v3q0 .825-.587 1.412Q18.825 16 18 16h-2v2.925q.25-.15.488-.3.237-.15.462-.35.3-.25.7-.237.4.012.675.287.325.325.313.75-.013.425-.363.7-1.35 1.075-2.95 1.65T12 22Z"/>
    </Icon>
  );
});

IconMaterialCribFilled.displayName = 'AmauiIconMaterialCribFilled';

export default IconMaterialCribFilled;
