import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAtmW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtmW100'

      short_name='Atm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14.6q-.15 0-.25-.1t-.1-.25V10.1h-1.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.9v4.15q0 .15-.1.25t-.25.1Zm-8 0q-.15 0-.25-.1t-.1-.25V10.1q0-.3.2-.5t.5-.2h2.8q.3 0 .5.2t.2.5v4.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1.4h-2.8v1.4q0 .15-.1.25t-.25.1Zm.35-2.45h2.8V10.1h-2.8ZM15.5 14.6q-.15 0-.25-.1t-.1-.25V10.1q0-.3.2-.5t.5-.2h4.8q.3 0 .5.2t.2.5v4.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V10.1H18.6v3.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V10.1h-2.05v4.15q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAtmW100.displayName = 'AmauiIconMaterialAtmW100';

export default IconMaterialAtmW100;
