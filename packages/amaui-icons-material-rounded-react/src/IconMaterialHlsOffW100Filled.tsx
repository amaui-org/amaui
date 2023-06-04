import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHlsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsOffW100Filled'

      short_name='HlsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.425 14.6-1.45-1.45q.05-.05.113-.1.062-.05.162-.05.15 0 .25.1t.1.25v.425l.125.125H19.4v-1.55h-2.8q-.3 0-.5-.2t-.2-.5V10.1q0-.275.213-.488.212-.212.487-.212h2.8q.275 0 .488.212.212.213.212.488v.55q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.55h-2.8v1.55h2.8q.3 0 .5.2t.2.5v1.55q0 .275-.212.487-.213.213-.488.213Zm-13.675 0q-.15 0-.25-.1t-.1-.25v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.8V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V12.1H4.1v2.15q0 .15-.1.25t-.25.1Zm16.1 6.25L3.15 4.15l.5-.5 16.7 16.7ZM10.3 14.6v-3.8l.7.7v2.4h2.4l.7.7Z"/>
    </Icon>
  );
});

IconMaterialHlsOffW100Filled.displayName = 'AmauiIconMaterialHlsOffW100Filled';

export default IconMaterialHlsOffW100Filled;
