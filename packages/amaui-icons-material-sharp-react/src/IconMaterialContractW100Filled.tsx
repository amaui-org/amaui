import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractW100Filled'

      short_name='Contract'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-132q-29 0-48.5-19.5T172-200v-108h120v-520h496v628q0 29-19.5 48.5T720-132H240Zm480-28q17 0 28.5-11.5T760-200v-600H320v492h360v108q0 17 11.5 28.5T720-160ZM380-632v-28h320v28H380Zm0 108v-28h320v28H380Z"/>
    </Icon>
  );
});

IconMaterialContractW100Filled.displayName = 'AmauiIconMaterialContractW100Filled';

export default IconMaterialContractW100Filled;
