import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsSharp'
      short_name='Drafts'

      {...props}
    >
      <path d="M2 21V6.975L12 1L22 6.975V21ZM12 12.65 19.8 8 12 3.35 4.2 8ZM4 19H20V10.2L12 15L4 10.2ZM4 19H12H20Z"/>
    </Icon>
  );
});

IconMaterialDraftsSharp.displayName = 'AmauiIconMaterialDraftsSharp';

export default IconMaterialDraftsSharp;
