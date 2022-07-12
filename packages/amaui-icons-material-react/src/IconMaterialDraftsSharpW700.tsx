import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsSharpW700'
      short_name='Drafts'

      {...props}
    >
      <path d="M1.15 22.075V6.7L12 0.225L22.85 6.7V22.075ZM12 12.575 19.275 8.225 12 3.875 4.725 8.225ZM4.3 18.925H19.7V10.725L12 15.35L4.3 10.725ZM4.3 18.925H12H19.7Z"/>
    </Icon>
  )
});

export default IconMaterialDraftsSharpW700;
