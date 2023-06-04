import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCorporateFareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareFilled'

      short_name='CorporateFare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V3h10v4h10v14Zm2-2h6v-2H4Zm0-4h6v-2H4Zm0-4h6V9H4Zm0-4h6V5H4Zm8 12h8V9h-8Zm2-6v-2h4v2Zm0 4v-2h4v2Z"/>
    </Icon>
  );
});

IconMaterialCorporateFareFilled.displayName = 'AmauiIconMaterialCorporateFareFilled';

export default IconMaterialCorporateFareFilled;
