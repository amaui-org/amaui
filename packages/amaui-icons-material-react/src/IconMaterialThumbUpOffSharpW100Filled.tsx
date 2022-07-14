import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffSharpW100Filled'
      short_name='ThumbUpOff'

      {...props}
    >
      <path d="M8.35 19.7V9.3L14.4 3.35L14.975 3.925L13.9 9.3H23.4V10L19.3 19.7ZM1.5 19.7H5.85V9.825H1.5Z"/>
    </Icon>
  );
});

export default IconMaterialThumbUpOffSharpW100Filled;
