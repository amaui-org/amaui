import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRadar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Radar'

      short_name='Radar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q1.4 0 2.637-.438 1.238-.437 2.263-1.237L15.475 16.9q-.725.525-1.612.812Q12.975 18 12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 .975-.3 1.875t-.825 1.625l1.425 1.425q.8-1.025 1.25-2.275Q20 13.4 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-4q.55 0 1.062-.137.513-.138.963-.413L12.5 13.925q-.125.05-.25.063Q12.125 14 12 14q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .15-.012.287-.013.138-.063.263l1.5 1.5q.275-.45.425-.963Q16 12.575 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialRadar.displayName = 'AmauiIconMaterialRadar';

export default IconMaterialRadar;
