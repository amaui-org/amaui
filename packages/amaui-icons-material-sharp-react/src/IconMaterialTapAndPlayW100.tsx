import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTapAndPlayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayW100'

      short_name='TapAndPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 4.65h10V3H7Zm8.9 17.05V21H17V5.35H7v6.75h-.7V2.3h11.4v19.4Zm-9.6 0v-1.2q.5 0 .85.35t.35.85Zm3.7 0q0-1.55-1.075-2.625T6.3 18v-.7q1.825 0 3.113 1.287Q10.7 19.875 10.7 21.7Zm3.2 0q0-2.875-2.012-4.888Q9.175 14.8 6.3 14.8v-.7q1.575 0 2.962.6 1.388.6 2.413 1.625t1.625 2.413q.6 1.387.6 2.962ZM7 4.65V3v1.65Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayW100.displayName = 'AmauiIconMaterialTapAndPlayW100';

export default IconMaterialTapAndPlayW100;
