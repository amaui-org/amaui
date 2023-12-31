import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkPenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkPenW100Filled'

      short_name='InkPen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-458-76-77 179-179-34-34-212 212-20-18 233-233 53 53 49-49 77 77-249 248ZM255-172h-76v-76l266-266 77 76-267 266Z"/>
    </Icon>
  );
});

IconMaterialInkPenW100Filled.displayName = 'AmauiIconMaterialInkPenW100Filled';

export default IconMaterialInkPenW100Filled;
