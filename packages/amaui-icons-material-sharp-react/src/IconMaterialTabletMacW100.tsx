import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletMacW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacW100'

      short_name='TabletMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 21.7V2.3h15.4v19.4Zm.7-5h14V5.35H5ZM5 21h14v-3.6H5ZM5 4.65h14V3H5Zm7 15.25q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 18.5 12 18.5t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212ZM5 4.65V3v1.65ZM5 21v-3.6V21Z"/>
    </Icon>
  );
});

IconMaterialTabletMacW100.displayName = 'AmauiIconMaterialTabletMacW100';

export default IconMaterialTabletMacW100;
