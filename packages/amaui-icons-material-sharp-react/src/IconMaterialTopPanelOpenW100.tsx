import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpenW100'

      short_name='TopPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 709 117-118H363l117 118ZM200 416h560V296H200v120Zm0 440h560V444H200v412Zm0-440V296v120Zm-28 468V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpenW100.displayName = 'AmauiIconMaterialTopPanelOpenW100';

export default IconMaterialTopPanelOpenW100;
