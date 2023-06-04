import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsW100'

      short_name='Drafts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7v-12L12 2.55l8.7 5.15v12Zm8.7-7.05L19.8 8 12 3.35 4.2 8ZM4 19h16V8.7l-8 4.75L4 8.7Zm0 0h16Z"/>
    </Icon>
  );
});

IconMaterialDraftsW100.displayName = 'AmauiIconMaterialDraftsW100';

export default IconMaterialDraftsW100;
