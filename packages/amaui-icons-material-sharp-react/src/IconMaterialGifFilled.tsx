import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGifFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifFilled'

      short_name='Gif'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 15V9H13v6ZM5 15V9h5v1.5H6.5v3h2V12H10v3Zm9.5 0V9H19v1.5h-3v1h2V13h-2v2Z"/>
    </Icon>
  );
});

IconMaterialGifFilled.displayName = 'AmauiIconMaterialGifFilled';

export default IconMaterialGifFilled;
