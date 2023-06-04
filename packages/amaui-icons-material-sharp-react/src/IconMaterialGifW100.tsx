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
      <path d="M11.9 14.6V9.4h.7v5.2Zm-6.2 0V9.4h4.2v.7H6.4v3.8h2.8v-1.7h.7v2.4Zm8.9 0V9.4h3.7v.7h-3v1.6h2v.7h-2v2.2Z"/>
    </Icon>
  );
});

IconMaterialGifW100.displayName = 'AmauiIconMaterialGifW100';

export default IconMaterialGifW100;
