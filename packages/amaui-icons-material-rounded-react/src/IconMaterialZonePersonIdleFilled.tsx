import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZonePersonIdleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonIdleFilled'

      short_name='ZonePersonIdle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 22.05-7.275-7.3-.4 1.95h-4l1-5.1-1.8.7v3.4H6V11l2.4-1.025L.675 2.25 2.1.825l19.8 19.8ZM4 20.7q-.825 0-1.412-.588Q2 19.525 2 18.7v-3h2v3h3v2Zm16-15v-3h-3v-2h3q.825 0 1.413.587Q22 1.875 22 2.7v3Zm-18 0v-3q0-.425.163-.788.162-.362.412-.637L4 2.725V5.7Zm15 15v-2h2.975l1.425 1.4q-.25.275-.612.438-.363.162-.788.162ZM13.5 8.2q-.825 0-1.412-.588Q11.5 7.025 11.5 6.2t.588-1.413Q12.675 4.2 13.5 4.2t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM6.825 2.7l-2-2H7v2ZM22 17.875l-2-2V15.7h2Z"/>
    </Icon>
  );
});

IconMaterialZonePersonIdleFilled.displayName = 'AmauiIconMaterialZonePersonIdleFilled';

export default IconMaterialZonePersonIdleFilled;
