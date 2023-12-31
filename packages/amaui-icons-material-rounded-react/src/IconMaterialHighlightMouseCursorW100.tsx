import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighlightMouseCursorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighlightMouseCursorW100'

      short_name='HighlightMouseCursor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M501-133q-5.25 1-10.5 1H480q-72.21 0-135.72-27.391-63.51-27.392-110.49-74.348-46.98-46.957-74.385-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.405 63.559 27.405 110.574 74.385 47.016 46.98 74.442 110.49Q828-552.21 828-480v10q0 5-1 10l-27-8v-12q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h12l9 27Zm265-31L583-348l-18 55q-4 11-15 11t-14-11l-48-160q-2-8 4.5-14.5T507-472l160 48q11 3 11 14t-11 15l-55 18 184 183q6 6 6 15t-6 15q-6 6-15 6t-15-6Z"/>
    </Icon>
  );
});

IconMaterialHighlightMouseCursorW100.displayName = 'AmauiIconMaterialHighlightMouseCursorW100';

export default IconMaterialHighlightMouseCursorW100;
