import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignpostFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignpostFilled'

      short_name='Signpost'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-4H6l-3-3 3-3h5v-2H4V4h7V2h2v2h5l3 3-3 3h-5v2h7v6h-7v4Z"/>
    </Icon>
  );
});

IconMaterialSignpostFilled.displayName = 'AmauiIconMaterialSignpostFilled';

export default IconMaterialSignpostFilled;
