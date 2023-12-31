import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEditW100'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-132q-29 0-48.5-19.5T172-200v-108h120v-520h496v246l-28 28v-246H320v492h194l-28 28H200v80q0 17 11.5 28.5T240-160h220v28H240Zm320 0v-81l162-162 20 19-154 154v42h42l154-154 20 20-162 162h-82Zm244-162-82-81 64-64 82 82-64 63ZM380-632v-28h320v28H380Zm0 108v-28h320v28H380Zm80 364H200h260Z"/>
    </Icon>
  );
});

IconMaterialContractEditW100.displayName = 'AmauiIconMaterialContractEditW100';

export default IconMaterialContractEditW100;
