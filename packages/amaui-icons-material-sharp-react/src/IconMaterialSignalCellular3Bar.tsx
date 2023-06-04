import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular3Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular3Bar'

      short_name='SignalCellular3Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22 22 2v20Zm13-2h5V6.825l-5 5Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular3Bar.displayName = 'AmauiIconMaterialSignalCellular3Bar';

export default IconMaterialSignalCellular3Bar;
