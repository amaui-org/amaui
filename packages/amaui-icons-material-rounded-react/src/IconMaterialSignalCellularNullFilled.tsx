import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalCellularNullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularNullFilled'

      short_name='SignalCellularNull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.825 20h13.15V6.85Zm-2.4 2q-.675 0-.938-.613-.262-.612.213-1.087L20.275 3.725q.475-.475 1.088-.213.612.263.612.938V21q0 .425-.287.712-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularNullFilled.displayName = 'AmauiIconMaterialSignalCellularNullFilled';

export default IconMaterialSignalCellularNullFilled;
