import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial123W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='123W100Filled'

      short_name='123'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.35 14.6q-.15 0-.25-.1t-.1-.25V10.1H4.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.1q.325 0 .538.212.212.213.212.538v4.1q0 .15-.1.25t-.25.1Zm3.75 0q-.325 0-.538-.213-.212-.212-.212-.537v-1.5q0-.3.2-.5t.5-.2h2.35V10.1H9.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.7q.3 0 .5.2t.2.5v1.55q0 .3-.2.5t-.5.2h-2.35v1.55h2.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm5.5 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.7v-1.55h-1.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.7V10.1h-2.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.7q.3 0 .5.2t.2.5v3.8q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterial123W100Filled.displayName = 'AmauiIconMaterial123W100Filled';

export default IconMaterial123W100Filled;
