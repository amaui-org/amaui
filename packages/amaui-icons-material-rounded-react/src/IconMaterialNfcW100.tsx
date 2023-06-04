import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNfcW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcW100'

      short_name='Nfc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.2 15.7q.625 0 1.063-.438.437-.437.437-1.062V9.8q0-.625-.437-1.063Q14.825 8.3 14.2 8.3h-1.85q-.275 0-.487.212-.213.213-.213.488v2.3q-.15.075-.3.237-.15.163-.15.463 0 .35.213.575.212.225.587.225.3 0 .55-.225.25-.225.25-.575 0-.3-.15-.463-.15-.162-.3-.237V9H15v6H9V9h1v-.7h-.2q-.625 0-1.062.437Q8.3 9.175 8.3 9.8v4.4q0 .625.438 1.062.437.438 1.062.438Zm-8.4 4q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialNfcW100.displayName = 'AmauiIconMaterialNfcW100';

export default IconMaterialNfcW100;
