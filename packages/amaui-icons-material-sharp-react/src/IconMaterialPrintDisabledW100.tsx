import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledW100'

      short_name='PrintDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 16.7 17.7v2H7.3v-4H4.05V8.8H7.8L3.15 4.15l.5-.5 16.7 16.7ZM8 19h8v-2l-2.7-2.7H8Zm10.5-3.3-.7-.7h1.45V9.5H12.3l-.7-.7h8.35v6.9ZM4.75 15H7.3v-1.4h5.3L8.5 9.5H4.75ZM16 8.8v-3H8.6l-.7-.7h8.8v3.7Zm1.5 3.2q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 10 17.5 10t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-5.2-2.5h6.95-6.95Zm-7.55 0H8.5 4.75Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledW100.displayName = 'AmauiIconMaterialPrintDisabledW100';

export default IconMaterialPrintDisabledW100;
