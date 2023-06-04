import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIframeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IframeOffW100Filled'

      short_name='IframeOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-25 0-42.5-17.5T132 784V368q0-25 17.5-42.5T192 308h20v40L100 236q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5L708 844H192Zm0-28h488L280 416H160v368q0 14 9 23t23 9Zm631-9-23-23V416H432L324 308h444q25 0 42.5 17.5T828 368v416q0 6-1.5 12t-3.5 11ZM720 704 512 496h178q13 0 21.5 8.5T720 526v178Z"/>
    </Icon>
  );
});

IconMaterialIframeOffW100Filled.displayName = 'AmauiIconMaterialIframeOffW100Filled';

export default IconMaterialIframeOffW100Filled;
