import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsRailwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRailwayW100'

      short_name='DirectionsRailway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19q-.125 0-.188-.062-.062-.063-.062-.188 0-.075.05-.175.05-.1.125-.15L8 17.7q-1.125 0-1.912-.787Q5.3 16.125 5.3 15V6q0-1.45 1.55-2.075Q8.4 3.3 12 3.3q3.6 0 5.15.625Q18.7 4.55 18.7 6v9q0 1.125-.787 1.913-.788.787-1.913.787l1.075.725q.075.05.125.125t.05.175q0 .125-.075.2-.075.075-.2.075Zm-1-7.7h12V6.4H6Zm10 .7H6h12-2Zm-4 3.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q12.425 13.5 12 13.5t-.712.287Q11 14.075 11 14.5t.288.712q.287.288.712.288ZM8 17h8q.825 0 1.413-.587Q18 15.825 18 15v-3H6v3q0 .825.588 1.413Q7.175 17 8 17Zm4-13q-2.925 0-4.35.412Q6.225 4.825 6 5.7h12q-.225-.875-1.65-1.288Q14.925 4 12 4Zm0 1.7h6H6h6Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRailwayW100.displayName = 'AmauiIconMaterialDirectionsRailwayW100';

export default IconMaterialDirectionsRailwayW100;
