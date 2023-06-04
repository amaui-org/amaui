import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoundationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationW100'

      short_name='Foundation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 18.7q-.15 0-.25-.1t-.1-.25V15.7h-.55q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h.55v-4.05h-.125q-.275 0-.375-.25-.1-.25.1-.45l5.6-5.05q.2-.2.5-.2t.5.2l5.6 5.05q.2.2.1.45t-.375.25H17.7V15h.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.55v2.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V15.7h-4.65v2.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V15.7H7v2.65q0 .15-.1.25t-.25.1ZM7 15h4.65V6.025L7 10.225Zm5.35 0H17v-4.775l-4.65-4.2Z"/>
    </Icon>
  );
});

IconMaterialFoundationW100.displayName = 'AmauiIconMaterialFoundationW100';

export default IconMaterialFoundationW100;
