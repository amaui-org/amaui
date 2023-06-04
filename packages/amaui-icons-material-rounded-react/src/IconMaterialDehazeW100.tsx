import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDehazeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeW100'

      short_name='Dehaze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17.05q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDehazeW100.displayName = 'AmauiIconMaterialDehazeW100';

export default IconMaterialDehazeW100;
