import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintW100'

      short_name='Print'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 8.8v-3H8v3h-.7V5.1h9.4v3.7Zm1.5 3.2q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 10 17.5 10t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM16 19v-4.7H8V19Zm.7.7H7.3v-4H4.05V8.8h15.9v6.9H16.7Zm2.55-4.7V9.5H4.75V15H7.3v-1.4h9.4V15ZM4.75 9.5h14.5H7.3Z"/>
    </Icon>
  );
});

IconMaterialPrintW100.displayName = 'AmauiIconMaterialPrintW100';

export default IconMaterialPrintW100;
