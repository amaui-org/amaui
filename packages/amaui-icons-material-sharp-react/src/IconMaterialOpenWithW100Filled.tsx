import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenWithW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenWithW100Filled'

      short_name='OpenWith'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.1-3.35-3.35.5-.5 2.5 2.5v-5.1h.7v5.1l2.5-2.5.5.5Zm-5.75-5.75L2.9 12l3.35-3.35.5.5-2.5 2.5h5.1v.7h-5.1l2.5 2.5Zm11.5 0-.5-.5 2.5-2.5h-5.1v-.7h5.1l-2.5-2.5.5-.5L21.1 12Zm-6.1-6v-5.1l-2.5 2.5-.5-.5L12 2.9l3.35 3.35-.5.5-2.5-2.5v5.1Z"/>
    </Icon>
  );
});

IconMaterialOpenWithW100Filled.displayName = 'AmauiIconMaterialOpenWithW100Filled';

export default IconMaterialOpenWithW100Filled;
