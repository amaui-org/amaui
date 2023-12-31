import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularPauseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularPauseW100'

      short_name='SignalCellularPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m166-132 622-622v352h-28v-284L234-160h284v28H166Zm452 0v-170h28v170h-28Zm128 0v-170h28v170h-28ZM497-423Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularPauseW100.displayName = 'AmauiIconMaterialSignalCellularPauseW100';

export default IconMaterialSignalCellularPauseW100;
