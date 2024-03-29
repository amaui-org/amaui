import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTibiaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaFilled'

      short_name='Tibia'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 9.2 6.875 7.075q-.425-.425-.65-.975Q6 5.55 6 4.975q0-1.25.863-2.113Q7.725 2 8.95 2h6.1q1.225 0 2.075.862.85.863.85 2.088 0 .625-.25 1.187-.25.563-.675.988L15 9.175v5.55l2.1 2.1q.425.425.663.975.237.55.237 1.15 0 1.275-.875 2.15t-2.15.875q-.6 0-1.15-.225-.55-.225-.975-.65-.175-.2-.387-.288-.213-.087-.463-.087t-.462.1q-.213.1-.388.275-.425.425-.975.65-.55.225-1.15.225-1.275 0-2.15-.875T6 18.95q0-.6.225-1.15.225-.55.65-.975L9 14.75Z"/>
    </Icon>
  );
});

IconMaterialTibiaFilled.displayName = 'AmauiIconMaterialTibiaFilled';

export default IconMaterialTibiaFilled;
