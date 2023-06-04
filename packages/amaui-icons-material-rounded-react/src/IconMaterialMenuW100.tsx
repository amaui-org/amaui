import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenuW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuW100'

      short_name='Menu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17.05q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialMenuW100.displayName = 'AmauiIconMaterialMenuW100';

export default IconMaterialMenuW100;
