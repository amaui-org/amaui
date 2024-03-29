import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOncologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OncologyFilled'

      short_name='Oncology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 21q-1.65 0-2.825-1.175Q13 18.65 13 17q0-1.65 1.175-2.825Q15.35 13 17 13q1.65 0 2.825 1.175Q21 15.35 21 17q0 .575-.15 1.087-.15.513-.425.963l1.85 1.85q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-1.85-1.85q-.45.275-.95.413Q17.575 21 17 21Zm0-2q.825 0 1.413-.587Q19 17.825 19 17q0-.825-.587-1.412Q17.825 15 17 15q-.825 0-1.412.588Q15 16.175 15 17t.588 1.413Q16.175 19 17 19ZM4 22q-.425 0-.712-.288Q3 21.425 3 21v-5q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.287-.713Q10.425 9 10 9q-.825 0-1.412-.588Q8 7.825 8 7V3q0-.425.288-.713Q8.575 2 9 2h4q.425 0 .713.287Q14 2.575 14 3v1q2.925 0 4.962 2.037Q21 8.075 21 11v1.525q-.825-.725-1.85-1.125Q18.125 11 17 11q-2.5 0-4.25 1.75T11 17q0 .525.088 1.025.087.5.262.975H10q-.425 0-.712.288Q9 19.575 9 20v1q0 .425-.287.712Q8.425 22 8 22Z"/>
    </Icon>
  );
});

IconMaterialOncologyFilled.displayName = 'AmauiIconMaterialOncologyFilled';

export default IconMaterialOncologyFilled;
