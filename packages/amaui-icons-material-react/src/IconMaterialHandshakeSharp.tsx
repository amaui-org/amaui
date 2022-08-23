import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHandshakeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeSharp'
      short_name='Handshake'

      {...props}
    >
      <path d="M11.85 23 1.975 13.125 9.525 5.575 13.175 9.225 13.875 8.525 8.525 3.175 1.7 10 2.675 10.975 1.25 12.4 -1.1 10.05 8.575 0.375 11.675 3.475 14.775 0.375 24.625 10.225ZM11.875 20.2 21.8 10.225 14.75 3.175 13.075 4.85 16.725 8.5 13.175 12.05 9.525 8.4 4.8 13.125 5.525 13.85 9.25 10.125 10.65 11.525 6.925 15.25 7.625 15.95 11.35 12.225 12.775 13.65 9.05 17.375 9.75 18.075 13.475 14.35 14.875 15.75 11.15 19.475ZM8.975 7.375Z"/>
    </Icon>
  );
});

IconMaterialHandshakeSharp.displayName = 'AmauiIconMaterialHandshakeSharp';

export default IconMaterialHandshakeSharp;
