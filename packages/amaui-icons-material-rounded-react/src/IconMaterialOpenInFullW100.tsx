import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullW100'

      short_name='OpenInFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 20.35q-.325 0-.537-.212-.213-.213-.213-.538V14q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5.175L19.175 4.35H14q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.6q.325 0 .538.212.212.213.212.538V10q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V4.825L4.825 19.65H10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialOpenInFullW100.displayName = 'AmauiIconMaterialOpenInFullW100';

export default IconMaterialOpenInFullW100;
