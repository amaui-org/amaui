import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHeartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHeartFilled'

      short_name='ShieldWithHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q2.575-2.325 3.288-3.25.712-.925.712-1.85 0-.9-.65-1.55T13.8 8.7q-.525 0-1.012.212-.488.213-.788.588-.3-.375-.775-.588Q10.75 8.7 10.2 8.7q-.9 0-1.55.65T8 10.9q0 .475.137.887.138.413.551.95.412.538 1.212 1.3.8.763 2.1 1.963Zm0 6q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHeartFilled.displayName = 'AmauiIconMaterialShieldWithHeartFilled';

export default IconMaterialShieldWithHeartFilled;
