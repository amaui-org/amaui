import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFactCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckFilled'

      short_name='FactCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 9h5V7H5Zm0 4h5v-2H5Zm0 4h5v-2H5Zm9.55-2 4.95-4.95-1.425-1.425-3.525 3.55-1.425-1.425-1.4 1.425ZM2 21V3h20v18Z"/>
    </Icon>
  );
});

IconMaterialFactCheckFilled.displayName = 'AmauiIconMaterialFactCheckFilled';

export default IconMaterialFactCheckFilled;
