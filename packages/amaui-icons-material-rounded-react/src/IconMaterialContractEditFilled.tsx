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
      <path d="M838-231 699-92q-6 6-13.5 9T670-80h-70q-17 0-28.5-11.5T560-120v-70q0-8 3-15.5t9-13.5l139-139 127 127Zm42-42L753-400l29-29q12-12 28-12t28 12l71 71q12 12 12 28t-12 28l-29 29ZM400-600q-17 0-28.5-11.5T360-640q0-17 11.5-28.5T400-680h280q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600H400Zm0 120q-17 0-28.5-11.5T360-520q0-17 11.5-28.5T400-560h280q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480H400ZM240-80q-50 0-85-35t-35-85v-40q0-33 23.5-56.5T200-320h40v-480q0-33 23.5-56.5T320-880h440q33 0 56.5 23.5T840-800v200l-80 80v-280H320v480h240l-57 57q-11 11-17 25.5t-6 30.5v127H240Z"/>
    </Icon>
  );
});

IconMaterialContractEditFilled.displayName = 'AmauiIconMaterialContractEditFilled';

export default IconMaterialContractEditFilled;
