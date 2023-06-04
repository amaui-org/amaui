import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendToMobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileFilled'

      short_name='SendToMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 16-1.4-1.4 1.55-1.6H12v-2h5.15L15.6 9.4 17 8l4 4ZM5 23V1h14v6h-2V6H7v12h10v-1h2v6Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileFilled.displayName = 'AmauiIconMaterialSendToMobileFilled';

export default IconMaterialSendToMobileFilled;
