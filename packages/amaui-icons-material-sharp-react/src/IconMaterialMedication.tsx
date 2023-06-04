import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMedication = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Medication'

      short_name='Medication'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 17.5h3V15H16v-3h-2.5V9.5h-3V12H8v3h2.5ZM5 21V6h14v15Zm2-2h10V8H7ZM6 5V3h12v2Zm1 14V8v11Z"/>
    </Icon>
  );
});

IconMaterialMedication.displayName = 'AmauiIconMaterialMedication';

export default IconMaterialMedication;
