import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledW100Filled'

      short_name='NearMeDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.9 13.05-4.975-2.025q-.2-.075-.275-.213-.075-.137-.075-.312t.075-.312q.075-.138.275-.213L10.2 8.35 4.825 2.975q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125l-5.45-5.45L13.925 18q-.075.2-.212.275-.138.075-.313.075t-.325-.075q-.15-.075-.225-.275Zm5.75-2.075L12.95 7.3l4.8-1.85q.175-.075.325-.025.15.05.275.175.125.125.163.275.037.15-.038.325Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledW100Filled.displayName = 'AmauiIconMaterialNearMeDisabledW100Filled';

export default IconMaterialNearMeDisabledW100Filled;
