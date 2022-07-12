import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsSharpFilled'
      short_name='Drafts'

      {...props}
    >
      <path d="M2 21V6.975L12 1L22 6.975V21ZM12 12.65 19.8 8 12 3.35 4.2 8Z"/>
    </Icon>
  )
});

export default IconMaterialDraftsSharpFilled;
