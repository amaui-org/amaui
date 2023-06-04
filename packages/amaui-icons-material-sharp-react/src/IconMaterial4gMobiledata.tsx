import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledata'

      short_name='4gMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17v-3H3V7h2v5h2V7h2v5h2v2H9v3Zm5 0V7h9v2h-7v6h5v-2h-2.5v-2H21v6Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledata.displayName = 'AmauiIconMaterial4gMobiledata';

export default IconMaterial4gMobiledata;
