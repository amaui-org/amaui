import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeHeatCoolFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatCoolFilled'

      short_name='ModeHeatCool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 23q-.425 0-.712-.288Q10 22.425 10 22v-3.6L7.4 21q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.3-.7 0-.4.3-.7L17.6 8q.3-.3.7-.3.4 0 .7.3.3.3.3.7 0 .4-.3.7L16.4 12H20q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 14 20 14h-5.6l-.5.5 1.5 1.5H20q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 18 20 18h-2.6l1.6 1.6q.3.3.3.7 0 .4-.3.7-.3.3-.7.3-.4 0-.7-.3L16 19.4V22q0 .425-.287.712Q15.425 23 15 23t-.712-.288Q14 22.425 14 22v-4.6l-1.5-1.5-.5.5V22q0 .425-.287.712Q11.425 23 11 23Zm-4.9-6.35q-1.4-.775-2.25-2.15Q3 13.125 3 11.425q0-1.525.538-2.638Q4.075 7.675 5.2 6.5q.875-.9 1.488-1.85.612-.95.612-2.275v-2.1q2.625 1.55 4.5 3.687 1.875 2.138 2.65 4.363L12.825 9.95q-.4-1.875-1.5-3.363Q10.225 5.1 9.05 4.05q-.25.975-.85 1.925-.6.95-1.45 1.775-.95.925-1.35 1.775-.4.85-.4 1.9 0 .775.275 1.45.275.675.75 1.2.025-1.05.663-2.275.637-1.225 1.687-2.35.125-.125.275-.2.15-.075.325-.075.175 0 .337.075.163.075.288.2.35.35.763.9.412.55.787 1.225L9.675 13.05q-.125-.35-.3-.638Q9.2 12.125 9 11.85q-.45.65-.712 1.275-.263.625-.263 1 0 .125.013.262.012.138.062.263Z"/>
    </Icon>
  );
});

IconMaterialModeHeatCoolFilled.displayName = 'AmauiIconMaterialModeHeatCoolFilled';

export default IconMaterialModeHeatCoolFilled;
