import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsNightSightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsNightSightFilled'

      short_name='SettingsNightSight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 23-.3-1.5q-.3-.125-.562-.262-.263-.138-.538-.338l-1.45.45-1-1.7 1.15-1q-.05-.35-.05-.65 0-.3.05-.65l-1.15-1 1-1.7 1.45.45q.275-.2.538-.338.262-.137.562-.262L17 13h2l.3 1.5q.3.125.563.275.262.15.537.375l1.45-.5 1 1.75-1.15 1q.05.3.05.625t-.05.625l1.15 1-1 1.7-1.45-.45q-.275.2-.537.338-.263.137-.563.262L19 23Zm1-3q.825 0 1.413-.587Q20 18.825 20 18q0-.825-.587-1.413Q18.825 16 18 16q-.825 0-1.413.587Q16 17.175 16 18q0 .825.587 1.413Q17.175 20 18 20Zm-5.775 1.95q-1.95-.175-3.625-1.025-1.675-.85-2.925-2.2-1.25-1.35-1.963-3.1Q3 13.875 3 11.9q0-3.65 2.325-6.438Q7.65 2.675 11.25 2q-.45 2.475.275 4.837.725 2.363 2.5 4.138.2.2.413.387.212.188.437.363-1.8.875-2.837 2.562Q11 15.975 11 18q0 1.075.312 2.075.313 1 .913 1.875Z"/>
    </Icon>
  );
});

IconMaterialSettingsNightSightFilled.displayName = 'AmauiIconMaterialSettingsNightSightFilled';

export default IconMaterialSettingsNightSightFilled;
