import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamWiredStand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWiredStand'

      short_name='NestCamWiredStand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-1.25 0-2.125.863Q9 18.725 9 20v1h6v-1q0-1.275-.863-2.137Q13.275 17 12 17ZM8 7.75q0 1.675 1.125 2.9 1.125 1.225 2.8 1.425l4.1.425V3l-4.1.4q-1.675.175-2.8 1.412Q8 6.05 8 7.75ZM17 23H7v-3q0-2.1 1.463-3.55Q9.925 15 12 15q.275 0 .525.025t.5.075l.55-.85-1.85-.175q-2.425-.25-4.075-2.063Q6 10.2 6 7.75q0-2.475 1.638-4.288Q9.275 1.65 11.725 1.4l6.3-.6v13.875l-2.2-.2-.95 1.425q.975.675 1.55 1.75Q17 18.725 17 20Zm-.975-15.25ZM12 21Z"/>
    </Icon>
  );
});

IconMaterialNestCamWiredStand.displayName = 'AmauiIconMaterialNestCamWiredStand';

export default IconMaterialNestCamWiredStand;
