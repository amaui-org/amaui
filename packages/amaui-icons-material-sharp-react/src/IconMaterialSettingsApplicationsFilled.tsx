import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsApplicationsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsApplicationsFilled'

      short_name='SettingsApplications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm8-4h2l.3-1.5q.3-.125.563-.262.262-.138.537-.338l1.45.45 1-1.7-1.15-1q.05-.35.05-.65 0-.3-.05-.65l1.15-1-1-1.7-1.45.45q-.275-.2-.537-.338-.263-.137-.563-.262L13 7h-2l-.3 1.5q-.3.125-.563.262-.262.138-.537.338l-1.45-.45-1 1.7 1.15 1q-.05.35-.05.65 0 .3.05.65l-1.15 1 1 1.7 1.45-.45q.275.2.537.338.263.137.563.262Zm1-3q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialSettingsApplicationsFilled.displayName = 'AmauiIconMaterialSettingsApplicationsFilled';

export default IconMaterialSettingsApplicationsFilled;
