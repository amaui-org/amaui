import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceFilled'

      short_name='QuickReference'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 896q8 0 14-6t6-14V756q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0-200q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0 280q-83 0-141.5-58.5T480 776q0-83 58.5-141.5T680 576q83 0 141.5 58.5T880 776q0 83-58.5 141.5T680 976ZM520 456h160L480 256l200 200-200-200v160q0 17 11.5 28.5T520 456ZM200 976q-33 0-56.5-23.5T120 896V256q0-33 23.5-56.5T200 176h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v59q-20-6-40-9t-40-3q-57 0-107.5 21.5T484 576H320q-17 0-28.5 11.5T280 616q0 17 11.5 28.5T320 656h107q-9 19-15 39t-9 41h-83q-17 0-28.5 11.5T280 776q0 17 11.5 28.5T320 816h83q7 45 28 86.5t54 73.5H200Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceFilled.displayName = 'AmauiIconMaterialQuickReferenceFilled';

export default IconMaterialQuickReferenceFilled;
