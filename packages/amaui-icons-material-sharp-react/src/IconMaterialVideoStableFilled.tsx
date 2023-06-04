import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoStableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableFilled'

      short_name='VideoStable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.975 18 2.3-8.65L7.075 6l-2.3 8.65ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialVideoStableFilled.displayName = 'AmauiIconMaterialVideoStableFilled';

export default IconMaterialVideoStableFilled;
