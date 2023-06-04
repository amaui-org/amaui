import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTramW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramW100'

      short_name='Tram'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 17V8q0-1.65 1.775-2.15T11.6 5.3l.75-1.5H7.1v-.7h9.8v.7h-3.75l-.75 1.5q2.75.05 4.525.55Q18.7 6.35 18.7 8v9q0 1.125-.787 1.913-.788.787-1.913.787l1.5 1.5v.5H17l-2-2H9l-2 2h-.5v-.5L8 19.7q-1.125 0-1.912-.787Q5.3 18.125 5.3 17ZM16 14H6h12-2Zm-4 3.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q12.425 15.5 12 15.5t-.712.287Q11 16.075 11 16.5t.288.712q.287.288.712.288Zm0-9.8h6H6h6Zm-6 5.6h12V8.4H6ZM8 19h8q.825 0 1.413-.587Q18 17.825 18 17v-3H6v3q0 .825.588 1.413Q7.175 19 8 19Zm4-13q-3.025 0-4.4.412Q6.225 6.825 6 7.7h12q-.225-.875-1.6-1.288Q15.025 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialTramW100.displayName = 'AmauiIconMaterialTramW100';

export default IconMaterialTramW100;
