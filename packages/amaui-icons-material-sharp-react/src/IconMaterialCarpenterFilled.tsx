import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarpenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterFilled'

      short_name='Carpenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.075 22.7-4.25-4.225 1.425-1.425L3.1 5.4 7 1.5l14.15 14.125Zm0-2.825L18.3 15.65l-1.4-1.425-4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialCarpenterFilled.displayName = 'AmauiIconMaterialCarpenterFilled';

export default IconMaterialCarpenterFilled;
