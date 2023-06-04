import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularConnectedNoInternet4BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularConnectedNoInternet4BarFilled'

      short_name='SignalCellularConnectedNoInternet4Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 18v-8h2v8Zm1 4q-.425 0-.712-.288Q20 21.425 20 21t.288-.712Q20.575 20 21 20t.712.288Q22 20.575 22 21t-.288.712Q21.425 22 21 22ZM2 22 22 2v6h-4v14Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularConnectedNoInternet4BarFilled.displayName = 'AmauiIconMaterialSignalCellularConnectedNoInternet4BarFilled';

export default IconMaterialSignalCellularConnectedNoInternet4BarFilled;
