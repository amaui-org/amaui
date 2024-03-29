import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerSettingsNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewFilled'

      short_name='PowerSettingsNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13V3h2v10Zm1 8q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 13.85 3 12q0-2 .825-3.775T6.15 5.15L7.6 6.6q-1.25.95-1.925 2.375T5 12q0 2.9 2.05 4.95Q9.1 19 12 19q2.925 0 4.962-2.05Q19 14.9 19 12q0-1.6-.663-3.025Q17.675 7.55 16.4 6.6l1.45-1.45q1.5 1.3 2.325 3.075Q21 10 21 12q0 1.85-.712 3.488-.713 1.637-1.925 2.862-1.213 1.225-2.85 1.938Q13.875 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewFilled.displayName = 'AmauiIconMaterialPowerSettingsNewFilled';

export default IconMaterialPowerSettingsNewFilled;
