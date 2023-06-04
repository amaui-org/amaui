import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBabyChangingStationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BabyChangingStationW100Filled'

      short_name='BabyChangingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 21.35v-8.6L5.2 8.225q.2-.575.738-.813.537-.237 1.087.013l4.3 1.875h2.025v.7h-2.225L7.9 8.6l-1.55 4.7v8.05ZM7.75 5.5q-.65 0-1.125-.475T6.15 3.9q0-.65.475-1.125T7.75 2.3q.65 0 1.125.475T9.35 3.9q0 .65-.475 1.125T7.75 5.5Zm1.9 10.9v-.7h10.7v.7Zm8.8-1.7q-.45 0-.775-.325t-.325-.775q0-.45.325-.775t.775-.325q.45 0 .775.325t.325.775q0 .45-.325.775t-.775.325Zm-6.8 0v-3h-2V11h2.7v2h3.3v-2h.7v3.7Z"/>
    </Icon>
  );
});

IconMaterialBabyChangingStationW100Filled.displayName = 'AmauiIconMaterialBabyChangingStationW100Filled';

export default IconMaterialBabyChangingStationW100Filled;
