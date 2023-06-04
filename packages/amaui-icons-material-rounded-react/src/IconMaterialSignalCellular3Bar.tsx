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
      <path d="M15 20h5V6.825l-5 5ZM4.425 22q-.675 0-.938-.613-.262-.612.213-1.087L20.3 3.7q.475-.475 1.088-.213.612.263.612.938V21q0 .425-.288.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular3Bar.displayName = 'AmauiIconMaterialSignalCellular3Bar';

export default IconMaterialSignalCellular3Bar;
