import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownW100'

      short_name='ThumbDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 14.7q-.575 0-1.037-.463Q2.3 13.775 2.3 13.2v-1q0-.125.025-.275.025-.15.075-.275l2.65-6.3q.2-.45.675-.75.475-.3.975-.3h9.75v10.4l-5.525 5.475q-.175.175-.375.225-.2.05-.375-.05t-.25-.3q-.075-.2-.025-.425l1-4.925Zm11.95-.3V5H6.7q-.275 0-.562.15-.288.15-.438.5L3 12v1.2q0 .35.225.575Q3.45 14 3.8 14h7.95l-1.1 5.45ZM19.2 4.3q.625 0 1.063.437.437.438.437 1.063v7.4q0 .625-.437 1.062-.438.438-1.063.438h-2.75V14h2.75q.35 0 .575-.225Q20 13.55 20 13.2V5.8q0-.35-.225-.575Q19.55 5 19.2 5h-2.75v-.7Zm-3.45.7v9.4V5Z"/>
    </Icon>
  );
});

IconMaterialThumbDownW100.displayName = 'AmauiIconMaterialThumbDownW100';

export default IconMaterialThumbDownW100;
