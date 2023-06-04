import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarpenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Carpenter'

      short_name='Carpenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.075 22.7-4.25-4.225 1.425-1.425L3.1 5.4 7 1.5l14.15 14.125Zm-1.4-7.075 2.825-2.8-8.5-8.5-1.3 1.3Zm1.4 4.25L18.3 15.65l-1.4-1.425-4.25 4.25Zm-1.4-4.25 2.825-2.8Z"/>
    </Icon>
  );
});

IconMaterialCarpenter.displayName = 'AmauiIconMaterialCarpenter';

export default IconMaterialCarpenter;
