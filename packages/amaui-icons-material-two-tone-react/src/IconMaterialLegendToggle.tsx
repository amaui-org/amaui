import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLegendToggle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LegendToggle'

      short_name='LegendToggle'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M20,15H4v-2h16V15z M20,17H4v2h16V17z M15,11l5-3.55L20,5l-5,3.55L10,5L4,8.66L4,11l5.92-3.61L15,11z"/></g>
    </Icon>
  );
});

IconMaterialLegendToggle.displayName = 'AmauiIconMaterialLegendToggle';

export default IconMaterialLegendToggle;
