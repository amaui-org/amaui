import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Iframe'

      short_name='Iframe'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M460 636h200v-80H460v80Zm-20 60q-17 0-28.5-11.5T400 656V536q0-17 11.5-28.5T440 496h240q17 0 28.5 11.5T720 536v120q0 17-11.5 28.5T680 696H440ZM160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h640q33 0 56.5 23.5T880 336v480q0 33-23.5 56.5T800 896H160Zm0-80h640V416H160v400Z"/>
    </Icon>
  );
});

IconMaterialIframe.displayName = 'AmauiIconMaterialIframe';

export default IconMaterialIframe;
