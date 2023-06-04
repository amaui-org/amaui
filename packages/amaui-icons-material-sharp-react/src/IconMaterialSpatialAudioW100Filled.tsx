import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpatialAudioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioW100Filled'

      short_name='SpatialAudio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22.275 9.525q-1.625 0-3.1-.625t-2.6-1.75q-1.125-1.125-1.75-2.6t-.625-3.1h.725q0 1.475.55 2.812.55 1.338 1.6 2.388 1.05 1.05 2.387 1.6 1.338.55 2.813.55Zm0-4.675q-.675 0-1.3-.263-.625-.262-1.1-.737-.475-.475-.737-1.1-.263-.625-.263-1.3h.725q0 .525.2 1.025.2.5.575.875.375.375.875.575.5.2 1.025.2Zm-12.15 6.85q-1.125 0-1.912-.788-.788-.787-.788-1.912t.788-1.912Q9 6.3 10.125 6.3t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.65.325-1.088.325-.437.925-.712 1.2-.575 2.65-.938 1.45-.362 2.8-.362 1.35 0 2.8.362 1.45.363 2.65.938.6.275.925.712.325.438.325 1.088v1.3Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioW100Filled.displayName = 'AmauiIconMaterialSpatialAudioW100Filled';

export default IconMaterialSpatialAudioW100Filled;
