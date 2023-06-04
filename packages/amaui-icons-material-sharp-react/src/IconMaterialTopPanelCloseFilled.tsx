import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseFilled'

      short_name='TopPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 756h320L480 596 320 756ZM200 856h560V496H200v360Zm-80 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseFilled.displayName = 'AmauiIconMaterialTopPanelCloseFilled';

export default IconMaterialTopPanelCloseFilled;
