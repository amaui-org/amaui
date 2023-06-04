import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeOff'

      short_name='VolumeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 22.6-3.025-3.025q-.625.4-1.325.688-.7.287-1.45.462v-2.05q.35-.125.688-.25.337-.125.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4 18.4 18.4Zm-.2-5.8-1.45-1.45q.425-.775.638-1.625.212-.85.212-1.75 0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137Q21 8.8 21 11.975q0 1.325-.362 2.55-.363 1.225-1.038 2.275ZM9.1 11.9Zm7.15 1.55L14 11.2V7.95q1.175.55 1.838 1.65.662 1.1.662 2.4 0 .375-.062.738-.063.362-.188.712ZM12 9.2 9.4 6.6 12 4Zm-2 5.95V12.8L8.2 11H5v2h2.85Z"/>
    </Icon>
  );
});

IconMaterialVolumeOff.displayName = 'AmauiIconMaterialVolumeOff';

export default IconMaterialVolumeOff;
