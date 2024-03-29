import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseFilled'

      short_name='ShieldWithHouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 9.525 5.575 4.35q.175-.55.262-1.1.088-.55.138-1.125L12 7l-5.975 4.65q.05.575.137 1.125.088.55.263 1.1ZM12 19.9q.525-.175 1.025-.425.5-.25.975-.575V15h-4v3.9q.475.325.975.575.5.25 1.025.425Zm0 2.1q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseFilled.displayName = 'AmauiIconMaterialShieldWithHouseFilled';

export default IconMaterialShieldWithHouseFilled;
