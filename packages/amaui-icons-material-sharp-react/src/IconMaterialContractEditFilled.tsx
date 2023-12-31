import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEditFilled'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-80v-127l151-151 127 127L687-80H560Zm320-193L753-400l57-57 127 127-57 57ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-80q-50 0-85-35t-35-85v-120h120v-560h600v280l-80 80v-280H320v480h240l-80 80v160H240Z"/>
    </Icon>
  );
});

IconMaterialContractEditFilled.displayName = 'AmauiIconMaterialContractEditFilled';

export default IconMaterialContractEditFilled;
