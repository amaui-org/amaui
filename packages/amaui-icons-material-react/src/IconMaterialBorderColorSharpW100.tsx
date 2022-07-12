import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorSharpW100'
      short_name='BorderColor'

      {...props}
    >
      <path d="M2 24V22.6H22V24ZM5.3 19.3V17.35L14.05 8.65L15.95 10.55L7.25 19.3ZM6 18.6H6.9L14.95 10.55L14.05 9.65L6 17.7ZM16.775 9.6 14.875 7.75 16.5 6.125 18.375 8ZM6 18.6Z"/>
    </Icon>
  )
});

export default IconMaterialBorderColorSharpW100;
