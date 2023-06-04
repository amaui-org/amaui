import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGifBox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifBox'

      short_name='GifBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.5 14h3v-2h-1v1h-1v-2h2v-1h-3Zm4 0h1v-4h-1Zm2 0h1v-1.5H16v-1h-1.5V11h2v-1h-3ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialGifBox.displayName = 'AmauiIconMaterialGifBox';

export default IconMaterialGifBox;
