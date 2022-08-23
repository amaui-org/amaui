import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHandshakeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeSharpW100'
      short_name='Handshake'

      {...props}
    >
      <path d="M11.775 21.325 3.675 13.225 9.725 7.175 12.875 10.325 14.25 8.95 8.35 3.05 1.9 9.5 3.225 10.825 2.725 11.325 0.9 9.5 8.35 2.05 11.6 5.3 14.875 2.025 22.975 10.125ZM11.75 20.325 21.95 10.125 14.875 3.05 12.125 5.8 15.275 8.95 12.875 11.35 9.7 8.175 4.65 13.225 6.05 14.625 9.9 10.775 10.4 11.275 6.55 15.125 7.95 16.525 12.1 12.375 12.6 12.875 8.45 17.025 9.85 18.425 14 14.275 14.5 14.775 10.35 18.925ZM7.85 8Z"/>
    </Icon>
  );
});

IconMaterialHandshakeSharpW100.displayName = 'AmauiIconMaterialHandshakeSharpW100';

export default IconMaterialHandshakeSharpW100;
