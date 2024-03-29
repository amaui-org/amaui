import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsAccountBoxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccountBoxFilled'

      short_name='SettingsAccountBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-.825 0-1.413-.587Q3 18.825 3 18V4q0-.825.587-1.413Q4.175 2 5 2h14q.825 0 1.413.587Q21 3.175 21 4v5.675q-.7-.35-1.462-.513Q18.775 9 18 9q-.725 0-1.375.137-.65.138-1.275.388.075-.25.113-.5.037-.25.037-.525 0-1.45-1.025-2.475Q13.45 5 12 5q-1.45 0-2.475 1.025Q8.5 7.05 8.5 8.5q0 1.45 1.025 2.475Q10.55 12 12 12h.25q-.325.45-.562.962-.238.513-.413 1.063-1.85.125-3.437.875Q6.25 15.65 5 16.85V18h6.3q.175.55.4 1.05.225.5.55.95Zm12 1-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.35-.05-.65 0-.3.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262L17 11h2l.3 1.5q.3.125.563.275.262.15.537.375l1.45-.5 1 1.75-1.15 1q.05.3.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262L19 21Zm1-3q.825 0 1.413-.587Q20 16.825 20 16q0-.825-.587-1.413Q18.825 14 18 14q-.825 0-1.413.587Q16 15.175 16 16q0 .825.587 1.413Q17.175 18 18 18Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccountBoxFilled.displayName = 'AmauiIconMaterialSettingsAccountBoxFilled';

export default IconMaterialSettingsAccountBoxFilled;
