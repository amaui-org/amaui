import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsW100Filled'

      short_name='Drafts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7v-12L12 2.55l8.7 5.15v12Zm8.7-7.05L19.8 8 12 3.35 4.2 8Z"/>
    </Icon>
  );
});

IconMaterialDraftsW100Filled.displayName = 'AmauiIconMaterialDraftsW100Filled';

export default IconMaterialDraftsW100Filled;
