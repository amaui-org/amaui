import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularAlt1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt1Bar'

      short_name='SignalCellularAlt1Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-.625 0-1.062-.438Q5 19.125 5 18.5v-3q0-.625.438-1.062Q5.875 14 6.5 14t1.062.438Q8 14.875 8 15.5v3q0 .625-.438 1.062Q7.125 20 6.5 20Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1Bar.displayName = 'AmauiIconMaterialSignalCellularAlt1Bar';

export default IconMaterialSignalCellularAlt1Bar;
