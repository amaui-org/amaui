import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoStableW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableW100Filled'

      short_name='VideoStable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.7 16.45 17.4 10 8.35 7.55l-1.7 6.4ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialVideoStableW100Filled.displayName = 'AmauiIconMaterialVideoStableW100Filled';

export default IconMaterialVideoStableW100Filled;
