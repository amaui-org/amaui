import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScrollableHeaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScrollableHeaderFilled'

      short_name='ScrollableHeader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-200H200v200Z"/>
    </Icon>
  );
});

IconMaterialScrollableHeaderFilled.displayName = 'AmauiIconMaterialScrollableHeaderFilled';

export default IconMaterialScrollableHeaderFilled;
