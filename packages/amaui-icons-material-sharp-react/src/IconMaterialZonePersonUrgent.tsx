import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZonePersonUrgent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonUrgent'

      short_name='ZonePersonUrgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 8.5q-.825 0-1.412-.588Q11.5 7.325 11.5 6.5t.588-1.412Q12.675 4.5 13.5 4.5t1.413.588q.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588Zm-.7 8.5h-4l1-5.1-1.8.7V16H6v-4.7l3.95-1.7q.875-.375 1.288-.487Q11.65 9 12 9q.525 0 .975.275.45.275.725.725l1 1.6q.275.425.6.787.325.363.75.663l-1.025 1.775q-.425-.275-.812-.613-.388-.337-.713-.712Zm.475 5L19 11.975 24.725 22ZM19 21q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q19.2 20 19 20q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm-.5-2h1v-4h-1ZM2 7V2h5v2H4v3Zm0 15v-5h2v3h3v2ZM20 7V4h-3V2h5v5Z"/>
    </Icon>
  );
});

IconMaterialZonePersonUrgent.displayName = 'AmauiIconMaterialZonePersonUrgent';

export default IconMaterialZonePersonUrgent;
