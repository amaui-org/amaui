import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPoliceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPoliceW100Filled'

      short_name='LocalPolice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 14.3 12 12.85l1.8 1.4-.7-2.25 1.95-1.5h-2.3L12 8.2l-.75 2.3h-2.3l1.9 1.5ZM12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Z"/>
    </Icon>
  );
});

IconMaterialLocalPoliceW100Filled.displayName = 'AmauiIconMaterialLocalPoliceW100Filled';

export default IconMaterialLocalPoliceW100Filled;
