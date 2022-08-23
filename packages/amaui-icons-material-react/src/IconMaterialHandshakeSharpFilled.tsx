import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHandshakeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeSharpFilled'
      short_name='Handshake'

      {...props}
    >
      <path d="M12.1 21.4 10.7 20 16.025 14.675 15.3 13.95 9.975 19.275 8.575 17.875 13.9 12.55 13.2 11.85 7.875 17.175 6.475 15.775 11.775 10.425 11.05 9.725 5.725 15.05 4.325 13.65 10.6 7.35 15.775 12.525 18.6 9.7 12.7 3.8 14.75 1.75 23.25 10.25ZM3.525 13 0.75 10.225 9.225 1.75 17.175 9.7 15.75 11.125 10.575 5.95Z"/>
    </Icon>
  );
});

IconMaterialHandshakeSharpFilled.displayName = 'AmauiIconMaterialHandshakeSharpFilled';

export default IconMaterialHandshakeSharpFilled;
