import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCenterFocusStrongFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusStrongFilled'

      short_name='CenterFocusStrong'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM3 9V3h6v2H5v4Zm6 12H3v-6h2v4h4Zm6 0v-2h4v-4h2v6Zm4-12V5h-4V3h6v6Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusStrongFilled.displayName = 'AmauiIconMaterialCenterFocusStrongFilled';

export default IconMaterialCenterFocusStrongFilled;
