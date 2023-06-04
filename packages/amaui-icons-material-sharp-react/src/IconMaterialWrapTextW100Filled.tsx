import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWrapTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextW100Filled'

      short_name='WrapText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.7 19.8 11.9 17l2.8-2.8.5.5-1.95 1.95h4q1 0 1.7-.7t.7-1.7q0-1-.7-1.7t-1.7-.7H4.65v-.7h12.6q1.275 0 2.188.912.912.913.912 2.188 0 1.275-.912 2.188-.913.912-2.188.912h-4l1.95 1.95ZM4.65 17.35v-.7h3.7v.7Zm0-11v-.7h14.7v.7Z"/>
    </Icon>
  );
});

IconMaterialWrapTextW100Filled.displayName = 'AmauiIconMaterialWrapTextW100Filled';

export default IconMaterialWrapTextW100Filled;
