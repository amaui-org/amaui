import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLteMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataW100Filled'

      short_name='LteMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 15.35v-6.7h.7v6h3v.7Zm6.45 0v-6h-2v-.7h4.7v.7h-2v6Zm4.7 0v-6.7h3.7v.7h-3v2.3h3v.7h-3v2.3h3v.7Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataW100Filled.displayName = 'AmauiIconMaterialLteMobiledataW100Filled';

export default IconMaterialLteMobiledataW100Filled;
