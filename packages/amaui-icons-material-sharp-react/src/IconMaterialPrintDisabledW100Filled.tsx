import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledW100Filled'

      short_name='PrintDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 16.7 17.7v2H7.3v-4H4.05V8.8H7.8L3.15 4.15l.5-.5 16.7 16.7ZM8 19h8v-2l-2.7-2.7H8Zm10.5-3.3h1.45V8.8H11.6Zm-7.6-7.6-3-3h8.8v3Zm6.6 3.9q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q17.075 10 17.5 10t.712.287q.288.288.288.713t-.288.712Q17.925 12 17.5 12Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledW100Filled.displayName = 'AmauiIconMaterialPrintDisabledW100Filled';

export default IconMaterialPrintDisabledW100Filled;
