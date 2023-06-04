import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLtePlusMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LtePlusMobiledata'

      short_name='LtePlusMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 16V8h2v6h3v2Zm6 0v-6H5V8h6v2H9v6Zm5 0V8h5v2h-3v1h3v2h-3v1h3v2Zm8-1v-2h-2v-2h2V9h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialLtePlusMobiledata.displayName = 'AmauiIconMaterialLtePlusMobiledata';

export default IconMaterialLtePlusMobiledata;
