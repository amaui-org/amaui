import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiving = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Living'

      short_name='Living'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v20Zm2-2h16V4H4Zm1-2h14v-7.65h-1.25V6H6.25v4.35H5Zm1.5-1.5v-5h2v3h7v-3h2v5ZM10 13v-2.95H7.75V7.5h8.5v2.55H14V13Zm-6 7V4v16Z"/>
    </Icon>
  );
});

IconMaterialLiving.displayName = 'AmauiIconMaterialLiving';

export default IconMaterialLiving;
