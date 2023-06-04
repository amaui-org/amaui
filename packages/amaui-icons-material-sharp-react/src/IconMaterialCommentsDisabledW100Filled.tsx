import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledW100Filled'

      short_name='CommentsDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5.6-5.6H3.3V4.3L2.25 3.25l.5-.5L21.8 21.8Zm-.6-4.4-4.55-4.55h1.2v-.7h-1.9l-2.3-2.3h4.2v-.7h-4.9l-2.3-2.3h7.2v-.7h-7.9L6.1 3.3h14.6ZM6.65 13.35h5.7l-.7-.7h-5Zm0-3h2.7l-.7-.7h-2Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledW100Filled.displayName = 'AmauiIconMaterialCommentsDisabledW100Filled';

export default IconMaterialCommentsDisabledW100Filled;
