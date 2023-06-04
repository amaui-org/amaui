import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDrafts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Drafts'

      short_name='Drafts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6.975L12 1l10 5.975V21Zm10-8.35L19.8 8 12 3.35 4.2 8ZM4 19h16v-8.8L12 15l-8-4.8Zm0 0h16Z"/>
    </Icon>
  );
});

IconMaterialDrafts.displayName = 'AmauiIconMaterialDrafts';

export default IconMaterialDrafts;
