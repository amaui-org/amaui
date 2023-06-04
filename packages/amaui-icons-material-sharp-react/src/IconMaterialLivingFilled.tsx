import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLivingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingFilled'

      short_name='Living'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v20Zm3-4h14v-7.65h-1.25V6H6.25v4.35H5Zm1.5-1.5v-5h2v3h7v-3h2v5ZM10 13v-2.95H7.75V7.5h8.5v2.55H14V13Z"/>
    </Icon>
  );
});

IconMaterialLivingFilled.displayName = 'AmauiIconMaterialLivingFilled';

export default IconMaterialLivingFilled;
