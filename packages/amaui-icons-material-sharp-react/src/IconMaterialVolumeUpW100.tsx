import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpW100'

      short_name='VolumeUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.1 19.125v-.75q2.025-.75 3.263-2.5 1.237-1.75 1.237-3.9t-1.237-3.9q-1.238-1.75-3.263-2.5v-.75q2.3.825 3.75 2.775 1.45 1.95 1.45 4.375t-1.45 4.375q-1.45 1.95-3.75 2.775ZM4.7 13.7v-3.4h3.25l3.15-3.15v9.7L7.95 13.7Zm9.4 1.4V8.85q.725.525 1.113 1.362.387.838.387 1.788 0 .95-.387 1.762-.388.813-1.113 1.338Zm-3.7-6.25L8.25 11H5.4v2h2.85l2.15 2.15ZM7.9 12Z"/>
    </Icon>
  );
});

IconMaterialVolumeUpW100.displayName = 'AmauiIconMaterialVolumeUpW100';

export default IconMaterialVolumeUpW100;
