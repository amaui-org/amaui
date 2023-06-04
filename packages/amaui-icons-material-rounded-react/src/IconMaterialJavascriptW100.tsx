import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJavascriptW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JavascriptW100'

      short_name='Javascript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.1 14.6q-.275 0-.487-.213-.213-.212-.213-.487v-.55q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.55h2.8v-1.65h-3q-.2 0-.35-.15-.15-.15-.15-.35V10.1q0-.275.213-.488.212-.212.487-.212h2.8q.275 0 .488.212.212.213.212.488v.55q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.55h-2.8v1.65h3q.225 0 .362.137.138.138.138.363v1.65q0 .275-.212.487-.213.213-.488.213Zm-6.1 0q-.3 0-.5-.2t-.2-.5v-1.05q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.05h2.25V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.15q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialJavascriptW100.displayName = 'AmauiIconMaterialJavascriptW100';

export default IconMaterialJavascriptW100;
