import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTramW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramW100Filled'

      short_name='Tram'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 17V8q0-1.65 1.775-2.15T11.6 5.3l.75-1.5H7.1v-.7h9.8v.7h-3.75l-.75 1.5q2.75.05 4.525.55Q18.7 6.35 18.7 8v9q0 1.125-.787 1.913-.788.787-1.913.787l1.5 1.5v.5H17l-2-2H9l-2 2h-.5v-.5L8 19.7q-1.125 0-1.912-.787Q5.3 18.125 5.3 17Zm6.7.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q12.425 15.5 12 15.5t-.712.287Q11 16.075 11 16.5t.288.712q.287.288.712.288Zm-6-4.2h12V8.4H6Z"/>
    </Icon>
  );
});

IconMaterialTramW100Filled.displayName = 'AmauiIconMaterialTramW100Filled';

export default IconMaterialTramW100Filled;
