import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidgetsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsFilled'

      short_name='Widgets'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.65 13 11 7.35l5.65-5.65 5.65 5.65ZM3 11V3h8v8Zm10 10v-8h8v8ZM3 21v-8h8v8Z"/>
    </Icon>
  );
});

IconMaterialWidgetsFilled.displayName = 'AmauiIconMaterialWidgetsFilled';

export default IconMaterialWidgetsFilled;
