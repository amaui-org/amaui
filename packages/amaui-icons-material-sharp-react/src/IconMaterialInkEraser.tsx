import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraser = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraser'

      short_name='InkEraser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M690-240h190v80H610l80-80Zm-500 80L48-302l552-572 312 312-392 402H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"/>
    </Icon>
  );
});

IconMaterialInkEraser.displayName = 'AmauiIconMaterialInkEraser';

export default IconMaterialInkEraser;
