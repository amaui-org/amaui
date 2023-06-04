import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetectionAndZoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectionAndZoneW100'

      short_name='DetectionAndZone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3H7V4H4.8q-.3 0-.55.25Q4 4.5 4 4.8V7ZM7 20.7H4.8q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V17H4v2.2q0 .3.25.55.25.25.55.25H7Zm10 0V20h2.2q.3 0 .55-.25.25-.25.25-.55V17h.7v2.2q0 .65-.425 1.075-.425.425-1.075.425ZM20 7V4.8q0-.3-.25-.55Q19.5 4 19.2 4H17v-.7h2.2q.65 0 1.075.425.425.425.425 1.075V7Zm-6.5 2.1q-.675 0-1.137-.463Q11.9 8.175 11.9 7.5t.463-1.138Q12.825 5.9 13.5 5.9t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm-1.2 8.1H9.6l1.05-5.4-3.3 1.375v3.175h-.7V12.7l4-1.65q.575-.225.85-.313.275-.087.5-.087.35 0 .65.187.3.188.5.513l1 1.6q.625 1 1.737 1.75 1.113.75 2.463.9v.7q-1.325-.125-2.725-.937-1.4-.813-2.45-2.638Z"/>
    </Icon>
  );
});

IconMaterialDetectionAndZoneW100.displayName = 'AmauiIconMaterialDetectionAndZoneW100';

export default IconMaterialDetectionAndZoneW100;
