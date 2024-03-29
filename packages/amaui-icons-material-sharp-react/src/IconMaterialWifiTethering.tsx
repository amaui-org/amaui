import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiTethering = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTethering'

      short_name='WifiTethering'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q-.825 0-1.412-.588Q10 13.825 10 13t.588-1.413Q11.175 11 12 11t1.413.587Q14 12.175 14 13q0 .825-.587 1.412Q12.825 15 12 15Zm-4.075 2.425q-.875-.825-1.4-1.962Q6 14.325 6 13q0-2.5 1.75-4.25T12 7q2.5 0 4.25 1.75T18 13q0 1.325-.525 2.475-.525 1.15-1.4 1.95L14.65 16q.625-.575.987-1.35Q16 13.875 16 13q0-1.65-1.175-2.825Q13.65 9 12 9q-1.65 0-2.825 1.175Q8 11.35 8 13q0 .9.363 1.662.362.763.987 1.338ZM5.1 20.25q-1.425-1.375-2.262-3.238Q2 15.15 2 13q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 3 12 3t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 10.925 22 13q0 2.15-.837 4.025-.838 1.875-2.263 3.225l-1.4-1.4q1.15-1.1 1.825-2.612Q20 14.725 20 13q0-3.35-2.325-5.675Q15.35 5 12 5 8.65 5 6.325 7.325 4 9.65 4 13q0 1.725.675 3.225t1.85 2.6Z"/>
    </Icon>
  );
});

IconMaterialWifiTethering.displayName = 'AmauiIconMaterialWifiTethering';

export default IconMaterialWifiTethering;
