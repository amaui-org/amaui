import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularConnectedNoInternet4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularConnectedNoInternet4Bar'

      short_name='SignalCellularConnectedNoInternet4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 18q-.425 0-.712-.288Q20 17.425 20 17v-6q0-.425.288-.713Q20.575 10 21 10t.712.287Q22 10.575 22 11v6q0 .425-.288.712Q21.425 18 21 18Zm0 4q-.425 0-.712-.288Q20 21.425 20 21t.288-.712Q20.575 20 21 20t.712.288Q22 20.575 22 21t-.288.712Q21.425 22 21 22ZM4.425 22q-.675 0-.938-.613-.262-.612.213-1.087L20.3 3.7q.475-.475 1.088-.213.612.263.612.938V8h-2q-.825 0-1.413.587Q18 9.175 18 10v12Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularConnectedNoInternet4Bar.displayName = 'AmauiIconMaterialSignalCellularConnectedNoInternet4Bar';

export default IconMaterialSignalCellularConnectedNoInternet4Bar;
