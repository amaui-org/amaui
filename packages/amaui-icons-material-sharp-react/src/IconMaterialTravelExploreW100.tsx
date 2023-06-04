import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTravelExploreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TravelExploreW100'

      short_name='TravelExplore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3q3.45 0 5.925 2.312 2.475 2.313 2.75 5.688h-.7q-.2-2.275-1.525-4.088Q17.125 5.4 15 4.55V5q0 .825-.587 1.412Q13.825 7 13 7h-2v2q0 .425-.287.712Q10.425 10 10 10H8v2h1.8v3H9l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.275 2.3 5.625T12 20Zm9-.2-3.525-3.475q-.425.325-.925.5t-1.05.175q-1.35 0-2.275-.925-.925-.925-.925-2.275 0-1.35.925-2.275.925-.925 2.275-.925 1.35 0 2.275.925.925.925.925 2.275 0 .575-.188 1.088-.187.512-.537.937L21.5 20ZM15.5 17q1.05 0 1.775-.725Q18 15.55 18 14.5q0-1.05-.725-1.775Q16.55 12 15.5 12q-1.05 0-1.775.725Q13 13.45 13 14.5q0 1.05.725 1.775Q14.45 17 15.5 17Z"/>
    </Icon>
  );
});

IconMaterialTravelExploreW100.displayName = 'AmauiIconMaterialTravelExploreW100';

export default IconMaterialTravelExploreW100;
