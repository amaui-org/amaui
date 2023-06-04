import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKingBed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBed'

      short_name='KingBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19H4l-.65-2H2v-7h2V5h16v5h2v7h-1.35L20 19h-1l-.65-2H5.65Zm8-9h5V7h-5Zm-7 0h5V7H6Zm-2 5h16v-3H4Zm16 0H4Z"/>
    </Icon>
  );
});

IconMaterialKingBed.displayName = 'AmauiIconMaterialKingBed';

export default IconMaterialKingBed;
