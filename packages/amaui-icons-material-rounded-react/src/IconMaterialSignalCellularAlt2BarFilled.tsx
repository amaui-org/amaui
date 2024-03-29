import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt2BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt2BarFilled'

      short_name='SignalCellularAlt2Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-.625 0-1.062-.438Q5 19.125 5 18.5v-3q0-.625.438-1.062Q5.875 14 6.5 14t1.062.438Q8 14.875 8 15.5v3q0 .625-.438 1.062Q7.125 20 6.5 20Zm6 0q-.625 0-1.062-.438Q11 19.125 11 18.5v-8q0-.625.438-1.062Q11.875 9 12.5 9t1.062.438Q14 9.875 14 10.5v8q0 .625-.438 1.062Q13.125 20 12.5 20Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt2BarFilled.displayName = 'AmauiIconMaterialSignalCellularAlt2BarFilled';

export default IconMaterialSignalCellularAlt2BarFilled;
