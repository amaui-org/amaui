import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronForwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronForwardW100'

      short_name='ChevronForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/>
    </Icon>
  );
});

IconMaterialChevronForwardW100.displayName = 'AmauiIconMaterialChevronForwardW100';

export default IconMaterialChevronForwardW100;
