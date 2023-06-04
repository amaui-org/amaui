import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyW100Filled'

      short_name='Emergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.375 20.375q-.325 0-.537-.212-.213-.213-.213-.538v-5.25L6.1 17q-.275.15-.575.075-.3-.075-.45-.35L4.45 15.65q-.15-.275-.075-.575.075-.3.35-.45L9.25 12 4.725 9.375q-.275-.15-.35-.45-.075-.3.075-.575l.625-1.075q.15-.275.45-.35.3-.075.575.075l4.525 2.625v-5.25q0-.325.213-.538.212-.212.537-.212h1.25q.325 0 .538.212.212.213.212.538v5.25L17.9 7q.275-.15.575-.075.3.075.45.35l.625 1.075q.15.275.075.575-.075.3-.35.45L14.75 12l4.525 2.625q.275.15.35.45.075.3-.075.575l-.625 1.075q-.15.275-.45.35-.3.075-.575-.075l-4.525-2.625v5.25q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialEmergencyW100Filled.displayName = 'AmauiIconMaterialEmergencyW100Filled';

export default IconMaterialEmergencyW100Filled;
