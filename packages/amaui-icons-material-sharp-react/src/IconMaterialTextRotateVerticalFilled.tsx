import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotateVerticalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVerticalFilled'

      short_name='TextRotateVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.9 17 15 6h2l4.1 11h-1.9l-1-2.8h-4.4l-1 2.8Zm3.45-4.4h3.3l-1.6-4.55h-.1ZM6 19l-3.5-3.5 1.4-1.4L5 15.15V5h2v10.15l1.1-1.05 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVerticalFilled.displayName = 'AmauiIconMaterialTextRotateVerticalFilled';

export default IconMaterialTextRotateVerticalFilled;
