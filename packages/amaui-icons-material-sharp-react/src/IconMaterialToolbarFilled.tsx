import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolbarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolbarFilled'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-640v-200h720v200H120Zm0 520v-440h720v440H120Z"/>
    </Icon>
  );
});

IconMaterialToolbarFilled.displayName = 'AmauiIconMaterialToolbarFilled';

export default IconMaterialToolbarFilled;
