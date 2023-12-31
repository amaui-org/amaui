import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAudioVideoReceiver = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioVideoReceiver'

      short_name='AudioVideoReceiver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-360h640v-320H160v320Zm-80 80v-480h800v480h-80v80h-80v-80H240v80h-80v-80H80Zm80-80v-320 320Zm500-80q33 0 56.5-23.5T740-520q0-33-23.5-56.5T660-600q-33 0-56.5 23.5T580-520q0 33 23.5 56.5T660-440Zm-420 0h280v-160H240v160Z"/>
    </Icon>
  );
});

IconMaterialAudioVideoReceiver.displayName = 'AmauiIconMaterialAudioVideoReceiver';

export default IconMaterialAudioVideoReceiver;
