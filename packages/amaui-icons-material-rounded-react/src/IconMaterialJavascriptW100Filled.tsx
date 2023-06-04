import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialJavascriptW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JavascriptW100Filled'

      short_name='Javascript'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.1 14.6q-.275 0-.487-.213-.213-.212-.213-.487v-.55q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.55h2.8v-1.55h-2.8q-.3 0-.5-.2t-.2-.5V10.1q0-.275.213-.488.212-.212.487-.212h2.8q.275 0 .488.212.212.213.212.488v.55q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.55h-2.8v1.55h2.8q.3 0 .5.2t.2.5v1.55q0 .275-.212.487-.213.213-.488.213Zm-6.1 0q-.3 0-.5-.2t-.2-.5v-1.05q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.05h2.25V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.15q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialJavascriptW100Filled.displayName = 'AmauiIconMaterialJavascriptW100Filled';

export default IconMaterialJavascriptW100Filled;
