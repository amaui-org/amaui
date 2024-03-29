import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAlt'

      short_name='DirectionsAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.375 0-.738-.15-.362-.15-.662-.45l-8-8q-.3-.3-.45-.662Q2 12.375 2 12t.15-.738q.15-.362.45-.662l8-8q.3-.3.662-.45Q11.625 2 12 2t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662l-8 8q-.3.3-.662.45-.363.15-.738.15Zm-4-6 4 4 8-8-8-8-8 8Zm4-4Zm1.15 1-1.875 1.9q-.275.275-.275.687 0 .413.3.713.275.275.7.275.425 0 .7-.275l3.6-3.6q.3-.3.3-.7 0-.4-.3-.7l-3.6-3.6q-.275-.275-.687-.288Q11.6 7.4 11.3 7.7q-.275.275-.288.687-.012.413.263.713L13.15 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAlt.displayName = 'AmauiIconMaterialDirectionsAlt';

export default IconMaterialDirectionsAlt;
