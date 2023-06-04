import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeekendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendFilled'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20V10h4v6h14v-6h4v10Zm6-6V8H4V4h16v4h-3v6Z"/>
    </Icon>
  );
});

IconMaterialWeekendFilled.displayName = 'AmauiIconMaterialWeekendFilled';

export default IconMaterialWeekendFilled;
