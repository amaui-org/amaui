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
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-200H200v200Zm0-280h560v-280H200v280Zm0 0v-280 280Z"/>
    </Icon>
  );
});

IconMaterialScrollableHeader.displayName = 'AmauiIconMaterialScrollableHeader';

export default IconMaterialScrollableHeader;
