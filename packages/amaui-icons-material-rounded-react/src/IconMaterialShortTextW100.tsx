import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShortTextW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextW100'

      short_name='ShortText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 10.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialShortTextW100.displayName = 'AmauiIconMaterialShortTextW100';

export default IconMaterialShortTextW100;
