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
      <path d="M16.7 8.1H7.3V5.85q0-.325.213-.538.212-.212.537-.212h7.9q.325 0 .538.212.212.213.212.538Zm.8 3.9q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q17.925 10 17.5 10t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-8.7 7h6.4q.35 0 .575-.225Q16 18.55 16 18.2v-3.9H8v3.9q0 .35.225.575Q8.45 19 8.8 19Zm0 .7q-.625 0-1.062-.438Q7.3 18.825 7.3 18.2v-2.5H4.8q-.325 0-.537-.212-.213-.213-.213-.538V10.5q0-.725.487-1.213Q5.025 8.8 5.75 8.8h12.5q.725 0 1.213.487.487.488.487 1.213v4.45q0 .325-.212.538-.213.212-.538.212h-2.5v2.5q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialPrintW100Filled.displayName = 'AmauiIconMaterialPrintW100Filled';

export default IconMaterialPrintW100Filled;
