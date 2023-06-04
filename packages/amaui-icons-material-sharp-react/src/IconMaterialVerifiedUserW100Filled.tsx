import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerifiedUserW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUserW100Filled'

      short_name='VerifiedUser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.95 14.65 15.7 9.9l-.5-.5-4.25 4.25L8.8 11.5l-.5.5Zm1.05 6q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Z"/>
    </Icon>
  );
});

IconMaterialVerifiedUserW100Filled.displayName = 'AmauiIconMaterialVerifiedUserW100Filled';

export default IconMaterialVerifiedUserW100Filled;
