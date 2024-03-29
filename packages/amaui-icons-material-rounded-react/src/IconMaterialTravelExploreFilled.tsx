import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTravelExploreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelExploreFilled'

      short_name='TravelExplore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2q3.65 0 6.387 2.287 2.738 2.288 3.413 5.738h-2.05q-.475-1.825-1.712-3.263Q16.8 5.325 15 4.6V5q0 .825-.587 1.412Q13.825 7 13 7h-2v2q0 .425-.287.712Q10.425 10 10 10H8v2h2v3H9l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.275 2.3 5.625T12 20Zm8.4-1.2-2.5-2.5q-.525.3-1.125.5T15.5 19q-1.875 0-3.188-1.312Q11 16.375 11 14.5q0-1.875 1.312-3.188Q13.625 10 15.5 10q1.875 0 3.188 1.312Q20 12.625 20 14.5q0 .675-.2 1.275-.2.6-.5 1.125l2.5 2.5q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM15.5 17q1.05 0 1.775-.725Q18 15.55 18 14.5q0-1.05-.725-1.775Q16.55 12 15.5 12q-1.05 0-1.775.725Q13 13.45 13 14.5q0 1.05.725 1.775Q14.45 17 15.5 17Z"/>
    </Icon>
  );
});

IconMaterialTravelExploreFilled.displayName = 'AmauiIconMaterialTravelExploreFilled';

export default IconMaterialTravelExploreFilled;
