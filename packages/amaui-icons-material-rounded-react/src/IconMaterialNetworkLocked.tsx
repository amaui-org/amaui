import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkLocked = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLocked'

      short_name='NetworkLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.825 20H14q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 22 14 22H4.425q-.675 0-.938-.613-.262-.612.213-1.087L20.3 3.7q.475-.475 1.088-.213.612.263.612.938V11q0 .425-.288.712Q21.425 12 21 12t-.712-.288Q20 11.425 20 11V6.825Zm11.025 2q-.35 0-.6-.25t-.25-.6v-3.3q0-.35.25-.6t.6-.25H18v-1q0-.825.587-1.413Q19.175 14 20 14q.825 0 1.413.587Q22 15.175 22 16v1h.15q.35 0 .6.25t.25.6v3.3q0 .35-.25.6t-.6.25ZM19 17h2v-1q0-.425-.288-.713Q20.425 15 20 15t-.712.287Q19 15.575 19 16Zm-5.575-3.575Z"/>
    </Icon>
  );
});

IconMaterialNetworkLocked.displayName = 'AmauiIconMaterialNetworkLocked';

export default IconMaterialNetworkLocked;
