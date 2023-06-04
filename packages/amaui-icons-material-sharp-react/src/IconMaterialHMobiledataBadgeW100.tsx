import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadgeW100'

      short_name='HMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M356 750h28V590h192v160h28V402h-28v160H384V402h-28v348ZM172 884V268h616v616H172Zm28-28h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadgeW100.displayName = 'AmauiIconMaterialHMobiledataBadgeW100';

export default IconMaterialHMobiledataBadgeW100;
