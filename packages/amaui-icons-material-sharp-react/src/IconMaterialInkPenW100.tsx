import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkPenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkPenW100'

      short_name='InkPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m476-505 36 36 238-238-36-36-238 238ZM207-200h36l248-248-36-36-248 248v36Zm315-238-76-77 199-199-34-34-212 212-20-18 233-233 53 53 49-49 77 77-269 268ZM255-172h-76v-76l266-267 77 77-267 266Z"/>
    </Icon>
  );
});

IconMaterialInkPenW100.displayName = 'AmauiIconMaterialInkPenW100';

export default IconMaterialInkPenW100;
