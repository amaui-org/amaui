import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForestW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestW100Filled'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.3 20.7v-3.3h1.4v3.3Zm-6 0v-4H2.45l4-6H4.5L9 4.25l4.5 6.45h-1.95l4 6H9.7v4Zm8.075-4-3.525-5.3h2l-2.425-3.45L15 4.25l4.5 6.45h-1.95l4 6Z"/>
    </Icon>
  );
});

IconMaterialForestW100Filled.displayName = 'AmauiIconMaterialForestW100Filled';

export default IconMaterialForestW100Filled;
