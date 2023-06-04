import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframeOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeOffFilled'

      short_name='IframeOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256v114L54 264q-12-12-11.5-28.5T55 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T790 999L686 896H160Zm0-80h446L206 416h-46v400Zm711 37-71-71V416H434L274 256h526q33 0 56.5 23.5T880 336v480q0 10-2 19.5t-7 17.5ZM720 702 514 496h166q17 0 28.5 11.5T720 536v166Z"/>
    </Icon>
  );
});

IconMaterialIframeOffFilled.displayName = 'AmauiIconMaterialIframeOffFilled';

export default IconMaterialIframeOffFilled;
