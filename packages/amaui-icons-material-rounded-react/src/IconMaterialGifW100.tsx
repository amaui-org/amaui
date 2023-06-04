import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGifW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifW100'

      short_name='Gif'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.25 14.6q-.15 0-.25-.1t-.1-.25v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1Zm-5.05 0q-.6 0-1.05-.45-.45-.45-.45-1.05v-2.2q0-.6.45-1.05.45-.45 1.05-.45h2.35q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H7.2q-.3 0-.55.25-.25.25-.25.55v2.2q0 .3.25.55.25.25.55.25h1.2q.3 0 .55-.25.25-.25.25-.55v-.55q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.225v.575q0 .6-.45 1.05-.45.45-1.05.45Zm7.75 0q-.15 0-.25-.1t-.1-.25v-4.1q0-.325.212-.538.213-.212.538-.212h2.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H15.3v1.6h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H15.3v1.85q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialGifW100.displayName = 'AmauiIconMaterialGifW100';

export default IconMaterialGifW100;
