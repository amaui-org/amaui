import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialTrackingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialTrackingFilled'

      short_name='SpatialTracking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.75 13.75q-1.275-1.275-2-2.938-.725-1.662-.725-3.462 0-1.8.725-3.475t2-2.95l1.375 1.45q-1 1-1.55 2.275t-.55 2.7q0 1.425.55 2.712.55 1.288 1.55 2.288Zm2.775-2.85q-.725-.7-1.112-1.625-.388-.925-.388-1.95t.388-1.925q.387-.9 1.112-1.625L22.95 5.2q-.425.425-.675.975-.25.55-.25 1.175t.25 1.175q.25.55.675.975ZM10 13q-1.65 0-2.825-1.175Q6 10.65 6 9q0-1.65 1.175-2.825Q8.35 5 10 5q1.65 0 2.825 1.175Q14 7.35 14 9q0 1.65-1.175 2.825Q11.65 13 10 13Zm-8 8v-2.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q8.075 14 10 14q1.925 0 3.525.45 1.6.45 2.875 1.1.75.375 1.175 1.1.425.725.425 1.55V21Z"/>
    </Icon>
  );
});

IconMaterialSpatialTrackingFilled.displayName = 'AmauiIconMaterialSpatialTrackingFilled';

export default IconMaterialSpatialTrackingFilled;
