import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsRailwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwayW100Filled'

      short_name='DirectionsRailway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.75 18.725q0-.05.05-.15.05-.1.125-.15L8 17.7q-1.125 0-1.912-.787Q5.3 16.125 5.3 15V6q0-1.45 1.55-2.075Q8.4 3.3 12 3.3q3.6 0 5.15.625Q18.7 4.55 18.7 6v9q0 1.125-.787 1.913-.788.787-1.913.787l1.075.725q.075.05.125.125t.05.175q0 .125-.075.2-.075.075-.2.075H7q-.125 0-.188-.062-.062-.063-.062-.213ZM6 11.3h12V6.4H6Zm6 4.2q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q12.425 13.5 12 13.5t-.712.287Q11 14.075 11 14.5t.288.712q.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwayW100Filled.displayName = 'AmauiIconMaterialDirectionsRailwayW100Filled';

export default IconMaterialDirectionsRailwayW100Filled;
