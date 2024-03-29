import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidgets = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Widgets'

      short_name='Widgets'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.65 13 11 7.35l5.65-5.65 5.65 5.65ZM3 11V3h8v8Zm10 10v-8h8v8ZM3 21v-8h8v8ZM5 9h4V5H5Zm11.675 1.2L19.5 7.375 16.675 4.55 13.85 7.375ZM15 19h4v-4h-4ZM5 19h4v-4H5ZM9 9Zm4.85-1.625ZM9 15Zm6 0Z"/>
    </Icon>
  );
});

IconMaterialWidgets.displayName = 'AmauiIconMaterialWidgets';

export default IconMaterialWidgets;
