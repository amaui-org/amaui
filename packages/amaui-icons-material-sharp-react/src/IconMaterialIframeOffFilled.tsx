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
      <path d="M818 1028 686 896H80V256h80v114L26 236l57-57 792 792-57 57ZM160 816h446L206 416h-46v400Zm640-34V416H434L274 256h606v606l-80-80Zm-80-80L514 496h206v206Z"/>
    </Icon>
  );
});

IconMaterialIframeOffFilled.displayName = 'AmauiIconMaterialIframeOffFilled';

export default IconMaterialIframeOffFilled;
