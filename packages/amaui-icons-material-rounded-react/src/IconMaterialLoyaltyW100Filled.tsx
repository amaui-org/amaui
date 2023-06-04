import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoyaltyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoyaltyW100Filled'

      short_name='Loyalty'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 16.425q.15 0 .288-.062.137-.063.262-.188L15.9 13.7q.2-.2.3-.462.1-.263.1-.588 0-.575-.412-1.013-.413-.437-.988-.437-.5 0-.975.25t-.925.9q-.45-.65-.925-.9-.475-.25-.975-.25-.575 0-.987.437-.413.438-.413 1.013 0 .325.1.588.1.262.3.462l2.35 2.475q.125.125.263.188.137.062.287.062Zm-.15 4.275q-.125 0-.262-.05-.138-.05-.238-.15l-8.8-8.8q-.125-.125-.187-.262Q3.3 11.3 3.3 11.15V4q0-.275.213-.488Q3.725 3.3 4 3.3h7.15q.125 0 .263.05.137.05.237.15l8.8 8.8q.225.225.238.537.012.313-.188.513l-7.15 7.15q-.1.1-.237.15-.138.05-.263.05ZM6.5 7.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialLoyaltyW100Filled.displayName = 'AmauiIconMaterialLoyaltyW100Filled';

export default IconMaterialLoyaltyW100Filled;
