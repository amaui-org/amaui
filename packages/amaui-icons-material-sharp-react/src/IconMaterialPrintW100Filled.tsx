import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintW100Filled'

      short_name='Print'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.7 8.1H7.3v-3h9.4Zm.8 3.9q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 10 17.5 10t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM16 19v-4.7H8V19Zm.7.7H7.3v-4H4.05V8.8h15.9v6.9H16.7Z"/>
    </Icon>
  );
});

IconMaterialPrintW100Filled.displayName = 'AmauiIconMaterialPrintW100Filled';

export default IconMaterialPrintW100Filled;
