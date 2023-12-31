import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractDeleteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractDeleteW100Filled'

      short_name='ContractDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-130-20-20 85-85-85-85 20-20 85 85 85-85 20 20-85 85 85 85-20 20-85-85-85 85ZM380-632v-28h320v28H380Zm0 108v-28h320v28H380ZM240-132q-29 0-48.5-19.5T172-200v-108h120v-520h496v359q-7-1-14-1h-14v-330H320v492h223q-6 17-9 35.5t-3 37.5q0 27 6 53t18 50H240Z"/>
    </Icon>
  );
});

IconMaterialContractDeleteW100Filled.displayName = 'AmauiIconMaterialContractDeleteW100Filled';

export default IconMaterialContractDeleteW100Filled;
