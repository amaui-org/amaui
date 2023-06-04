import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalDistributeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeFilled'

      short_name='HorizontalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h2v20Zm8.5-5V7h3v10Zm9.5 5V2h2v20Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistributeFilled.displayName = 'AmauiIconMaterialHorizontalDistributeFilled';

export default IconMaterialHorizontalDistributeFilled;
