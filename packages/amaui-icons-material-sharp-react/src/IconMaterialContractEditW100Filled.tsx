import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEditW100Filled'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-132v-81l132-132 82 81-132 132h-82Zm256-175-82-81 52-51 83 83-53 49ZM380-632v-28h320v28H380Zm0 108v-28h320v28H380ZM240-132q-29 0-48.5-19.5T172-200v-108h120v-520h496v246l-28 28v-246H320v492h194l-54 54v122H240Z"/>
    </Icon>
  );
});

IconMaterialContractEditW100Filled.displayName = 'AmauiIconMaterialContractEditW100Filled';

export default IconMaterialContractEditW100Filled;
