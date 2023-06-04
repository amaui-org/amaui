import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Label'

      short_name='Label'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 7H5v10h11l3.55-5z" opacity=".3"/><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"/>
    </Icon>
  );
});

IconMaterialLabel.displayName = 'AmauiIconMaterialLabel';

export default IconMaterialLabel;
