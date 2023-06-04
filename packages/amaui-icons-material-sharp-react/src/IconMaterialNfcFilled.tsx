import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNfcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcFilled'

      short_name='Nfc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h10V7h-4q-.825 0-1.412.587Q11 8.175 11 9v1.3q-.5.275-.75.7-.25.425-.25 1 0 .825.588 1.412Q11.175 14 12 14t1.413-.588Q14 12.825 14 12q0-.575-.275-1-.275-.425-.725-.7V9h2v6H9V9h1V7H7Zm-4 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialNfcFilled.displayName = 'AmauiIconMaterialNfcFilled';

export default IconMaterialNfcFilled;
