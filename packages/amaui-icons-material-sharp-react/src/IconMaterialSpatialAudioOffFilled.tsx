import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialAudioOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioOffFilled'

      short_name='SpatialAudioOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.3 13.75-1.4-1.4q1-1 1.563-2.288.562-1.287.562-2.712 0-1.425-.562-2.7Q19.9 3.375 18.9 2.375l1.4-1.45q1.275 1.275 2 2.95.725 1.675.725 3.475t-.725 3.462q-.725 1.663-2 2.938Zm-2.8-2.85-1.4-1.4q.425-.425.675-.975.25-.55.25-1.175t-.25-1.175q-.25-.55-.675-.975l1.4-1.425q.725.725 1.125 1.625t.4 1.925q0 1.025-.4 1.95T17.5 10.9ZM10 13q-1.65 0-2.825-1.175Q6 10.65 6 9q0-1.65 1.175-2.825Q8.35 5 10 5q1.65 0 2.825 1.175Q14 7.35 14 9q0 1.65-1.175 2.825Q11.65 13 10 13Zm-8 8v-2.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q8.075 14 10 14q1.925 0 3.525.45 1.6.45 2.875 1.1.75.375 1.175 1.1.425.725.425 1.55V21Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioOffFilled.displayName = 'AmauiIconMaterialSpatialAudioOffFilled';

export default IconMaterialSpatialAudioOffFilled;
