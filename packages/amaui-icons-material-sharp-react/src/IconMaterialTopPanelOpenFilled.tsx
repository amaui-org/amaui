import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpenFilled'

      short_name='TopPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 756 160-160H320l160 160ZM200 856h560V496H200v360Zm-80 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpenFilled.displayName = 'AmauiIconMaterialTopPanelOpenFilled';

export default IconMaterialTopPanelOpenFilled;
