import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCorporateFareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareW100Filled'

      short_name='CorporateFare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.95 19.9V3.2h8.7v4h9.4v12.7Zm.7-.7h7.3v-3.3h-7.3Zm0-4h7.3v-3.3h-7.3Zm0-4h7.3V7.9h-7.3Zm0-4h7.3V3.9h-7.3Zm8 12h8.7V7.9h-8.7Zm2.5-7.3v-.7h3.2v.7Zm0 4v-.7h3.2v.7Z"/>
    </Icon>
  );
});

IconMaterialCorporateFareW100Filled.displayName = 'AmauiIconMaterialCorporateFareW100Filled';

export default IconMaterialCorporateFareW100Filled;
