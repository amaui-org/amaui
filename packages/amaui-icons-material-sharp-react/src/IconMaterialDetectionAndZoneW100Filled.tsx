import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetectionAndZoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectionAndZoneW100Filled'

      short_name='DetectionAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 7V3.3H7V4H4v3Zm0 13.7V17H4v3h3v.7Zm13.7 0V20h3v-3h.7v3.7ZM20 7V4h-3v-.7h3.7V7Zm-6.5 2.1q-.675 0-1.137-.463Q11.9 8.175 11.9 7.5t.463-1.138Q12.825 5.9 13.5 5.9t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm-3.9 8.1 1.05-5.4-3.3 1.375v3.175h-.7V12.7l4-1.65q.575-.225.85-.313.275-.087.5-.087.35 0 .65.187.3.188.5.513l1 1.6q.625 1 1.737 1.75 1.113.75 2.463.9v.7q-1.325-.125-2.725-.937-1.4-.813-2.45-2.638L12.3 17.2Z"/>
    </Icon>
  );
});

IconMaterialDetectionAndZoneW100Filled.displayName = 'AmauiIconMaterialDetectionAndZoneW100Filled';

export default IconMaterialDetectionAndZoneW100Filled;
