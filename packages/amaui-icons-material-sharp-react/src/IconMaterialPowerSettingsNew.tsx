import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerSettingsNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNew'

      short_name='PowerSettingsNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13V3h2v10Zm1 8q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 13.85 3 12q0-2 .825-3.775T6.15 5.15l1.4 1.4q-1.2 1-1.875 2.425Q5 10.4 5 12q0 2.9 2.05 4.95Q9.1 19 12 19q2.925 0 4.962-2.05Q19 14.9 19 12q0-1.6-.663-3.025-.662-1.425-1.887-2.425l1.4-1.4q1.5 1.3 2.325 3.075Q21 10 21 12q0 1.85-.712 3.488-.713 1.637-1.925 2.862-1.213 1.225-2.85 1.938Q13.875 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNew.displayName = 'AmauiIconMaterialPowerSettingsNew';

export default IconMaterialPowerSettingsNew;
