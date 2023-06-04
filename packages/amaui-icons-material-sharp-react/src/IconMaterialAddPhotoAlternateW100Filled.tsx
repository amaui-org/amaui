import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateW100Filled'

      short_name='AddPhotoAlternate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 8V6h-2v-.7h2v-2h.7v2h2V6h-2v2ZM7.45 16.35h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM3.8 19.7V4.3h9.7V8h2v2h3.7v9.7Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateW100Filled.displayName = 'AmauiIconMaterialAddPhotoAlternateW100Filled';

export default IconMaterialAddPhotoAlternateW100Filled;
