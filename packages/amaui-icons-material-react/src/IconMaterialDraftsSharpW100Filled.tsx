import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsSharpW100Filled'
      short_name='Drafts'

      {...props}
    >
      <path d="M3.3 19.7V7.7L12 2.55L20.7 7.7V19.7ZM12 12.65 19.8 8 12 3.35 4.2 8Z"/>
    </Icon>
  )
});

export default IconMaterialDraftsSharpW100Filled;
