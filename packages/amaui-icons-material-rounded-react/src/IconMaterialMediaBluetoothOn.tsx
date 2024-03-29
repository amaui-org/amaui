import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaBluetoothOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaBluetoothOn'

      short_name='MediaBluetoothOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.85 20.75q-.2.2-.525.062Q17 20.675 17 20.4v-3.95l-2.325 2.325q-.175.175-.425.175t-.425-.175q-.175-.175-.175-.425t.175-.425L16.75 15l-2.975-2.975q-.175-.175-.175-.425t.175-.425Q13.95 11 14.2 11t.425.175L16.95 13.5V9.6q0-.275.325-.412.325-.138.525.062l2.475 2.475q.15.15.225.337.075.188.075.388t-.075.375q-.075.175-.225.325L18.4 15l1.875 1.85q.15.15.225.325.075.175.075.375t-.062.388q-.063.187-.213.337Zm.3-7.2 1.15-1.1-1.15-1.15Zm0 5.15 1.15-1.15-1.15-1.1ZM7 21q-1.65 0-2.825-1.175Q3 18.65 3 17q0-1.65 1.175-2.825Q5.35 13 7 13q.575 0 1.062.137.488.138.938.413V5q0-.825.588-1.413Q10.175 3 11 3h2q.825 0 1.413.587Q15 4.175 15 5q0 .825-.587 1.412Q13.825 7 13 7h-2v10q0 1.65-1.175 2.825Q8.65 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialMediaBluetoothOn.displayName = 'AmauiIconMaterialMediaBluetoothOn';

export default IconMaterialMediaBluetoothOn;
