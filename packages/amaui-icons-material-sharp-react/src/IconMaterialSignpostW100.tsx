import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignpostW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignpostW100'

      short_name='Signpost'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.7v-4H6.275l-2.35-2.35L6.275 12h5.375v-2h-7V5.3h7v-2h.7v2h5.375l2.35 2.35-2.35 2.35H12.35v2h7v4.7h-7v4ZM5.35 9.3h12.1l1.65-1.65L17.45 6H5.35Zm1.2 6.7h12.1v-3.3H6.55L4.9 14.35Zm-1.2-6.7V6v3.3Zm13.3 6.7v-3.3V16Z"/>
    </Icon>
  );
});

IconMaterialSignpostW100.displayName = 'AmauiIconMaterialSignpostW100';

export default IconMaterialSignpostW100;
