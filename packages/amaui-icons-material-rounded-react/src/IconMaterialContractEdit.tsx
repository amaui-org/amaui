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
      <path d="M240-80q-50 0-85-35t-35-85v-40q0-33 23.5-56.5T200-320h40v-480q0-33 23.5-56.5T320-880h440q33 0 56.5 23.5T840-800v284q-20-5-40.5-3T760-509v-291H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80H240Zm380-60h42l155-154 42 42L699-92q-6 6-13.5 9T670-80h-70q-17 0-28.5-11.5T560-120v-70q0-8 3-15.5t9-13.5l160-160 43 43-155 154v42Zm239-112L732-379l50-50q11-11 28-11t28 11l71 71q11 11 11 28t-11 28l-50 50ZM400-600q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680h280q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600H400Zm0 120q-17 0-28.5-11.5T360-520q0-17 11.5-28.5T400-560h280q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480H400Zm80 320H200h280Z"/>
    </Icon>
  );
});

IconMaterialContractEdit.displayName = 'AmauiIconMaterialContractEdit';

export default IconMaterialContractEdit;
