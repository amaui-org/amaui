import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagFilled'

      short_name='Tag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 20 1-4H3.5l.5-2h3.5l1-4h-4L5 8h4l1-4h2l-1 4h4l1-4h2l-1 4h3.5l-.5 2h-3.5l-1 4h4l-.5 2h-4l-1 4h-2l1-4H9l-1 4Zm3.5-6h4l1-4h-4Z"/>
    </Icon>
  );
});

IconMaterialTagFilled.displayName = 'AmauiIconMaterialTagFilled';

export default IconMaterialTagFilled;
