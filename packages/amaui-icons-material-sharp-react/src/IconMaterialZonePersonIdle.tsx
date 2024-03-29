import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZonePersonIdle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonIdle'

      short_name='ZonePersonIdle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20.7v-5h2v3h3v2Zm18-15v-3h-3v-2h5v5Zm-6.5 2.5q-.825 0-1.412-.588Q11.5 7.025 11.5 6.2t.588-1.413Q12.675 4.2 13.5 4.2t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM7 .7v2h-.175l-2-2Zm15 15v2.175l-2-2V15.7Zm-5 5v-2h.125L13.2 14.75l-.4 1.95h-4l1-5.1-1.8.7v3.4H6V11l2.4-1.025-4.4-4.4V5.7H2V3.575L.675 2.25 2.1.825l19.8 19.8-1.425 1.425-1.35-1.35Z"/>
    </Icon>
  );
});

IconMaterialZonePersonIdle.displayName = 'AmauiIconMaterialZonePersonIdle';

export default IconMaterialZonePersonIdle;
