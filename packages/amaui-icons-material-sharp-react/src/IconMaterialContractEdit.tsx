import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEdit'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v280l-80 80v-280H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80H240Zm320 0v-127l172-172 43 43-155 154v42h42l155-154 42 42L687-80H560Zm299-172L732-379l78-78 127 127-78 78ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Z"/>
    </Icon>
  );
});

IconMaterialContractEdit.displayName = 'AmauiIconMaterialContractEdit';

export default IconMaterialContractEdit;
