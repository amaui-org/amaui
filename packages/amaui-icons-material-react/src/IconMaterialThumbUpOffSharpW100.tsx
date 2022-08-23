import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffSharpW100'
      short_name='ThumbUpOff'

      {...props}
    >
      <path d="M8.35 19.7V9.3L14.4 3.35L14.975 3.925L13.9 9.3H23.4V10L19.3 19.7ZM9.05 19H18.825L22.65 10H13.05L14.15 4.55L9.05 9.6ZM1.5 19.7H5.85V9.825H1.5ZM9.05 19V9.6V10V19Z"/>
    </Icon>
  );
});

IconMaterialThumbUpOffSharpW100.displayName = 'AmauiIconMaterialThumbUpOffSharpW100';

export default IconMaterialThumbUpOffSharpW100;
