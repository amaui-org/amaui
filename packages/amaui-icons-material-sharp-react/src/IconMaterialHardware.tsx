import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardware = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hardware'

      short_name='Hardware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21V8H4q0-2.075 1.463-3.537Q6.925 3 9 3h6v3l3-3h2v8h-2l-3-3v13Zm4-9Zm-2 7h2v-6h-2Zm0-8h2V5H9q-.65 0-1.225.262-.575.263-1 .738H11Zm2 0V5v6Zm0 8v-6 6Z"/>
    </Icon>
  );
});

IconMaterialHardware.displayName = 'AmauiIconMaterialHardware';

export default IconMaterialHardware;
