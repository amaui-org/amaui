import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagInactiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagInactiveW100'

      short_name='CarryOnBagInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m548-430-28-28v-142H377l-28-28h171v-172h-46q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h44q12.75 0 21.375 8.625T548-798v368Zm154 308-64-64q0 36-25.5 63T548-96q-39 0-63-25t-26-51H312q-26 0-43-17t-17-43v-340L94-730q-4-4-4.5-9.5T94-750q5-5 10-5t10 5l608 608q4 4 4.5 9.5T722-122q-5 5-10 5t-10-5Zm-356-78v-278l-66-66v312q0 14 9 23t23 9h34Zm202 76q26 0 44-18t18-44q0-26-18-44t-44-18q-26 0-44 18t-18 44q0 26 18 44t44 18Zm-174-76h86q2-23 20-44.5t40-26.5v-33L374-450v250Zm174 14ZM377-600Zm-17 275Zm-14 125v-278 278Zm28 0v-250 250Zm174 14Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactiveW100.displayName = 'AmauiIconMaterialCarryOnBagInactiveW100';

export default IconMaterialCarryOnBagInactiveW100;
