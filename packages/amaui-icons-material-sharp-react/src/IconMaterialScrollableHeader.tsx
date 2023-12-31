import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScrollableHeader = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScrollableHeader'

      short_name='ScrollableHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-200H200v200Zm0-280h560v-280H200v280Zm0 0v-280 280Z"/>
    </Icon>
  );
});

IconMaterialScrollableHeader.displayName = 'AmauiIconMaterialScrollableHeader';

export default IconMaterialScrollableHeader;
