import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGavel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gavel'

      short_name='Gavel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-2h12v2Zm5.65-4.85L4 10.5l2.1-2.15L11.8 14ZM16 9.8l-5.65-5.7L12.5 2l5.65 5.65ZM20.6 20 7.55 6.95l1.4-1.4L22 18.6Z"/>
    </Icon>
  );
});

IconMaterialGavel.displayName = 'AmauiIconMaterialGavel';

export default IconMaterialGavel;
