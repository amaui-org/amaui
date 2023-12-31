import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularPauseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularPauseW100Filled'

      short_name='SignalCellularPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M618-132v-170h28v170h-28Zm128 0v-170h28v170h-28Zm-580 0 622-622v352H518v270H166Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularPauseW100Filled.displayName = 'AmauiIconMaterialSignalCellularPauseW100Filled';

export default IconMaterialSignalCellularPauseW100Filled;
