import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAmbientScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmbientScreen'

      short_name='AmbientScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v321h-80V336H160v480h401v80H80Zm700 40-44-96-96-44 96-44 44-96 44 96 96 44-96 44-44 96ZM160 816V336v480-20 20Zm320-80 50-110 110-50-110-50-50-110-50 110-110 50 110 50 50 110Z"/>
    </Icon>
  );
});

IconMaterialAmbientScreen.displayName = 'AmauiIconMaterialAmbientScreen';

export default IconMaterialAmbientScreen;
