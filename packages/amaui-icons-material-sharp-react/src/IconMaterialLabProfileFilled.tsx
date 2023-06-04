import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabProfileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileFilled'

      short_name='LabProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 12h8v-2H8Zm0-4h8V6H8Zm12 12.55L14.975 14H4V2h16ZM4 22v-6h10l4.6 6Z"/>
    </Icon>
  );
});

IconMaterialLabProfileFilled.displayName = 'AmauiIconMaterialLabProfileFilled';

export default IconMaterialLabProfileFilled;
