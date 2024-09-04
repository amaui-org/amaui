import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChevronForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChevronForwardFilled'

      short_name='ChevronForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </Icon>
  );
});

IconMaterialChevronForwardFilled.displayName = 'AmauiIconMaterialChevronForwardFilled';

export default IconMaterialChevronForwardFilled;
