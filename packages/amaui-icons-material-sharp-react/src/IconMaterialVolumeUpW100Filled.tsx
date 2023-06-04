import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpW100Filled'

      short_name='VolumeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.1 19.125v-.75q2.025-.75 3.263-2.5 1.237-1.75 1.237-3.9t-1.237-3.9q-1.238-1.75-3.263-2.5v-.75q2.3.825 3.75 2.775 1.45 1.95 1.45 4.375t-1.45 4.375q-1.45 1.95-3.75 2.775Zm-3-2.275L7.95 13.7H4.7v-3.4h3.25l3.15-3.15Zm3-1.75V8.85q.725.525 1.113 1.362.387.838.387 1.788 0 .95-.387 1.762-.388.813-1.113 1.338Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpW100Filled.displayName = 'AmauiIconMaterialVolumeUpW100Filled';

export default IconMaterialVolumeUpW100Filled;
