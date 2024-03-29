import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOffFilled'

      short_name='MediaBluetoothOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 8.15-2-2V5q0-.825.588-1.413Q10.175 3 11 3h2q.825 0 1.413.587Q15 4.175 15 5q0 .825-.587 1.412Q13.825 7 13 7h-2Zm10.2 10.2L14.8 12q-.175-.175-.175-.4 0-.225.175-.4.175-.175.4-.175.225 0 .4.175l2.35 2.35V9.6q0-.275.325-.412.325-.138.525.062l2.475 2.45q.15.15.225.325.075.175.075.375t-.062.375q-.063.175-.213.325L19.4 15l1.85 1.8q.175.175.25.338.075.162.075.412 0 .275-.087.475-.088.2-.288.325Zm-2.05-4.8 1.15-1.15-1.15-1.1Zm-.05 8.35-3.3-3.3-.15.15q-.175.175-.425.2-.25.025-.425-.15-.2-.2-.2-.45t.2-.45l.15-.15L11 13.8V17q0 1.65-1.175 2.825Q8.65 21 7 21q-1.65 0-2.825-1.175Q3 18.65 3 17q0-1.65 1.175-2.825Q5.35 13 7 13q.575 0 1.062.137.488.138.938.413V11.8L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOffFilled.displayName = 'AmauiIconMaterialMediaBluetoothOffFilled';

export default IconMaterialMediaBluetoothOffFilled;
