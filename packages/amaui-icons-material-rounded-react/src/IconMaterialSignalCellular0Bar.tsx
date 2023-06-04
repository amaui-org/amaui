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
      <path d="M6.825 20h13.15V6.85Zm-2.4 2q-.675 0-.938-.613-.262-.612.213-1.087L20.275 3.725q.475-.475 1.088-.213.612.263.612.938V21q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialSignalCellular0Bar.displayName = 'AmauiIconMaterialSignalCellular0Bar';

export default IconMaterialSignalCellular0Bar;
