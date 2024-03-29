import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Store'

      short_name='Store'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h14q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6Zm0 14q-.425 0-.713-.288Q4 19.425 4 19v-5h-.175q-.475 0-.775-.363-.3-.362-.2-.837l1-5q.075-.35.35-.575Q4.475 7 4.825 7h14.35q.35 0 .625.225t.35.575l1 5q.1.475-.2.837-.3.363-.775.363H20v5q0 .425-.288.712Q19.425 20 19 20t-.712-.288Q18 19.425 18 19v-5h-4v5q0 .425-.287.712Q13.425 20 13 20Zm1-2h6v-4H6Zm-.95-6h13.9Zm0 0h13.9l-.6-3H5.65Z"/>
    </Icon>
  );
});

IconMaterialStore.displayName = 'AmauiIconMaterialStore';

export default IconMaterialStore;
