import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractDeleteW100'

      short_name='ContractDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m765-215-85 85-20-20 85-85-85-85 20-20 85 85 85-85 20 20-85 85 85 85-20 20-85-85Zm-525 83q-29 0-48.5-19.5T172-200v-108h120v-520h496v359q-7-1-14-1h-14v-330H320v492h223q-2 7-4 13.5t-4 14.5H200v80q0 17 11.5 28.5T240-160h303q2 8 5.5 14.5T555-132H240Zm140-500v-28h320v28H380Zm0 108v-28h320v28H380Zm163 364H200h335-4 12Z"/>
    </Icon>
  );
});

IconMaterialContractDeleteW100.displayName = 'AmauiIconMaterialContractDeleteW100';

export default IconMaterialContractDeleteW100;
