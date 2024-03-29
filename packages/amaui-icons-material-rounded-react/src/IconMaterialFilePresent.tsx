import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilePresent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresent'

      short_name='FilePresent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8.175q.4 0 .763.15.362.15.637.425l3.85 3.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V8h-3q-.425 0-.712-.287Q14 7.425 14 7V4H6v16ZM6 4v4-4 16V4Zm6 15q1.675 0 2.838-1.175Q16 16.65 16 15v-3q0-.425-.287-.713Q15.425 11 15 11t-.712.287Q14 11.575 14 12v3q0 .825-.575 1.413Q12.85 17 12 17q-.825 0-1.412-.587Q10 15.825 10 15V9.5q0-.225.15-.363Q10.3 9 10.5 9q.225 0 .363.137.137.138.137.363V14q0 .425.288.712.287.288.712.288t.713-.288Q13 14.425 13 14V9.5q0-1.05-.725-1.775Q11.55 7 10.5 7q-1.05 0-1.775.725Q8 8.45 8 9.5V15q0 1.65 1.175 2.825Q10.35 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialFilePresent.displayName = 'AmauiIconMaterialFilePresent';

export default IconMaterialFilePresent;
