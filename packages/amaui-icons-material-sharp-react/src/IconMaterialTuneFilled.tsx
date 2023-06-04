import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTuneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneFilled'

      short_name='Tune'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19v-2h6v2ZM3 7V5h10v2Zm8 14v-6h2v2h8v2h-8v2Zm-4-6v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2Z"/>
    </Icon>
  );
});

IconMaterialTuneFilled.displayName = 'AmauiIconMaterialTuneFilled';

export default IconMaterialTuneFilled;
