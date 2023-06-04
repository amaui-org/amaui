import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNew'

      short_name='OpenInNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h9v2H5v14h14v-7h2v9Zm6.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/>
    </Icon>
  );
});

IconMaterialOpenInNew.displayName = 'AmauiIconMaterialOpenInNew';

export default IconMaterialOpenInNew;
