import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDehazeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DehazeW100Filled'

      short_name='Dehaze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 17.05v-.7h18.7v.7Zm0-4.7v-.7h18.7v.7Zm0-4.7v-.7h18.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDehazeW100Filled.displayName = 'AmauiIconMaterialDehazeW100Filled';

export default IconMaterialDehazeW100Filled;
