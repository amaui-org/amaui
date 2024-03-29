import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialAudioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioFilled'

      short_name='SpatialAudio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M23 10.025q-1.8 0-3.45-.688-1.65-.687-2.925-1.962T14.663 4.45Q13.975 2.8 13.975 1h2q0 1.425.525 2.7.525 1.275 1.525 2.275 1 1 2.275 1.537 1.275.538 2.7.538Zm0-3.975q-1.025 0-1.938-.375-.912-.375-1.637-1.1-.725-.725-1.1-1.638Q17.95 2.025 17.95 1h1.975q0 .625.238 1.188.237.562.662.987.425.425.987.65.563.225 1.188.225ZM10 13q-1.65 0-2.825-1.175Q6 10.65 6 9q0-1.65 1.175-2.825Q8.35 5 10 5q1.65 0 2.825 1.175Q14 7.35 14 9q0 1.65-1.175 2.825Q11.65 13 10 13Zm-8 8v-2.8q0-.825.425-1.55.425-.725 1.175-1.1 1.275-.65 2.875-1.1Q8.075 14 10 14q1.925 0 3.525.45 1.6.45 2.875 1.1.75.375 1.175 1.1.425.725.425 1.55V21Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioFilled.displayName = 'AmauiIconMaterialSpatialAudioFilled';

export default IconMaterialSpatialAudioFilled;
