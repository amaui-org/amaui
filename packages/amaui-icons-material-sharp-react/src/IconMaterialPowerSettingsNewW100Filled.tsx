import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerSettingsNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewW100Filled'

      short_name='PowerSettingsNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13V4.1h.7V13Zm.35 6.7q-1.6 0-3-.6t-2.45-1.65Q5.5 16.4 4.9 15q-.6-1.4-.6-3 0-1.725.75-3.263Q5.8 7.2 7.1 6.1l.5.5q-1.25.95-1.925 2.375T5 12q0 2.9 2.05 4.95Q9.1 19 12 19q2.925 0 4.962-2.05Q19 14.9 19 12q0-1.6-.663-3.025Q17.675 7.55 16.4 6.6l.5-.5q1.325 1.1 2.063 2.637.737 1.538.737 3.263 0 1.6-.6 3t-1.65 2.45Q16.4 18.5 15 19.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewW100Filled.displayName = 'AmauiIconMaterialPowerSettingsNewW100Filled';

export default IconMaterialPowerSettingsNewW100Filled;
