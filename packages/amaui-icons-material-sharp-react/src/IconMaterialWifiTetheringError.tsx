import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiTetheringError = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTetheringError'

      short_name='WifiTetheringError'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.1 20.25q-1.425-1.375-2.262-3.238Q2 15.15 2 13q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 3 12 3q2.8 0 5.075 1.362Q19.35 5.725 20.675 8H18.25q-1.125-1.375-2.738-2.188Q13.9 5 12 5 8.65 5 6.325 7.325 4 9.65 4 13q0 1.725.675 3.225t1.85 2.6Zm2.825-2.825q-.875-.825-1.4-1.962Q6 14.325 6 13q0-2.5 1.75-4.25T12 7q2.5 0 4.25 1.75T18 13q0 1.325-.525 2.475-.525 1.15-1.4 1.95L14.65 16q.625-.575.987-1.35Q16 13.875 16 13q0-1.65-1.175-2.825Q13.65 9 12 9q-1.65 0-2.825 1.175Q8 11.35 8 13q0 .9.363 1.662.362.763.987 1.338ZM12 15q-.825 0-1.412-.588Q10 13.825 10 13t.588-1.413Q11.175 11 12 11t1.413.587Q14 12.175 14 13q0 .825-.587 1.412Q12.825 15 12 15Zm9 5q-.425 0-.712-.288Q20 19.425 20 19t.288-.712Q20.575 18 21 18t.712.288Q22 18.575 22 19t-.288.712Q21.425 20 21 20Zm-1-4v-6h2v6Z"/>
    </Icon>
  );
});

IconMaterialWifiTetheringError.displayName = 'AmauiIconMaterialWifiTetheringError';

export default IconMaterialWifiTetheringError;
