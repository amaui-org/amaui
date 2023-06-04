import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdfScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScannerW100'

      short_name='AdfScanner'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.75 19.2q-.275 0-.487-.213-.213-.212-.213-.487v-4q0-.725.487-1.213.488-.487 1.213-.487H7.3v-7q0-.275.213-.488Q7.725 5.1 8 5.1h8q.275 0 .488.212.212.213.212.488v7h1.55q.725 0 1.213.487.487.488.487 1.213v4q0 .275-.212.487-.213.213-.488.213ZM8 12.8h8v-7H8Zm-3.25 5.7h14.5v-4q0-.425-.288-.713-.287-.287-.712-.287H5.75q-.425 0-.713.287-.287.288-.287.713ZM17.5 16q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 14 17.5 14t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM4.75 13.5h14.5Z"/>
    </Icon>
  );
});

IconMaterialAdfScannerW100.displayName = 'AmauiIconMaterialAdfScannerW100';

export default IconMaterialAdfScannerW100;
