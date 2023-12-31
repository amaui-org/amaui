import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightMouseCursorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightMouseCursorW100Filled'

      short_name='HighlightMouseCursor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M501-133q-5.25 1-10.5 1H480q-72.21 0-135.72-27.391-63.51-27.392-110.49-74.348-46.98-46.957-74.385-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.405 63.559 27.405 110.574 74.385 47.016 46.98 74.442 110.49Q828-552.21 828-480v10q0 5-1 10l-27-8v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l9 27Zm280-16L583-348l-33 100-70-232 232 70-100 33 199 198-30 30Z"/>
    </Icon>
  );
});

IconMaterialHighlightMouseCursorW100Filled.displayName = 'AmauiIconMaterialHighlightMouseCursorW100Filled';

export default IconMaterialHighlightMouseCursorW100Filled;
