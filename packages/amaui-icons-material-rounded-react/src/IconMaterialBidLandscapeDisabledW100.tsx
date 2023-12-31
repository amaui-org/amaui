import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBidLandscapeDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BidLandscapeDisabledW100'

      short_name='BidLandscapeDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M712-172H232q-26 0-43-17t-17-43v-480l-90-90q-4-4-4.5-9.5T82-822q5-5 10-5t10 5l720 720q4 4 4.5 9.5T822-82q-5 5-10 5t-10-5l-90-90ZM372-492 200-320.099V-232q0 12 10 22t22 10h452L538-346q-8 2-15-.5t-12-7.5L372-492ZM200-684v324l162-162-162-162Zm50-104h478q26 0 43 17t17 43v478l-28-28v-306L615-423l-20-20 165-183v-102q0-12-10-22t-22-10H278l-28-28Zm345 345Zm-144 10Zm-89-89Zm10 30Zm145-29Z"/>
    </Icon>
  );
});

IconMaterialBidLandscapeDisabledW100.displayName = 'AmauiIconMaterialBidLandscapeDisabledW100';

export default IconMaterialBidLandscapeDisabledW100;
