import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelClose = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelClose'

      short_name='TopPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 756h320L480 596 320 756ZM200 416h560V296H200v120Zm0 440h560V496H200v360Zm0-440V296v120Zm-80 520V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelClose.displayName = 'AmauiIconMaterialTopPanelClose';

export default IconMaterialTopPanelClose;
