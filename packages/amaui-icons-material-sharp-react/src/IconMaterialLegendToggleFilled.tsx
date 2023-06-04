import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLegendToggleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggleFilled'

      short_name='LegendToggle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19v-2h16v2Zm0-4v-2h16v2Zm0-4V8.65L10 5l5 3.55L20 5v2.45L15 11 9.925 7.4Z"/>
    </Icon>
  );
});

IconMaterialLegendToggleFilled.displayName = 'AmauiIconMaterialLegendToggleFilled';

export default IconMaterialLegendToggleFilled;
