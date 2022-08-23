import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpSharpW100Filled'
      short_name='ThumbUp'

      {...props}
    >
      <path d="M8.35 19.7V9.3L14.4 3.35L14.975 3.925L13.9 9.3H23.4V10L19.3 19.7ZM1.5 19.7H5.85V9.825H1.5Z"/>
    </Icon>
  );
});

IconMaterialThumbUpSharpW100Filled.displayName = 'AmauiIconMaterialThumbUpSharpW100Filled';

export default IconMaterialThumbUpSharpW100Filled;
