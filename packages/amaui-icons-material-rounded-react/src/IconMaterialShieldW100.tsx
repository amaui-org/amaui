import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldW100'

      short_name='Shield'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.575h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Zm0-.675q2.6-.825 4.3-3.3 1.7-2.475 1.7-5.5V6.775q0-.2-.1-.35-.1-.15-.275-.2L12.375 4.3q-.2-.075-.375-.075t-.375.075l-5.25 1.925q-.175.05-.275.2-.1.15-.1.35V11.1q0 3.025 1.7 5.5t4.3 3.3Zm0-7.85Z"/>
    </Icon>
  );
});

IconMaterialShieldW100.displayName = 'AmauiIconMaterialShieldW100';

export default IconMaterialShieldW100;
