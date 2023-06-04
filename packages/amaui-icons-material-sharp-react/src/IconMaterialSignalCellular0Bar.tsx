import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellular0Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellular0Bar'

      short_name='SignalCellular0Bar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22 21.975 2.025V22Zm4.825-2h13.15V6.85Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular0Bar.displayName = 'AmauiIconMaterialSignalCellular0Bar';

export default IconMaterialSignalCellular0Bar;
