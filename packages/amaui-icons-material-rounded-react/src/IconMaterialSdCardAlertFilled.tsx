import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertFilled'

      short_name='SdCardAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13q.425 0 .713-.288Q13 12.425 13 12V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v3q0 .425.288.712.287.288.712.288Zm0 4q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm-6 5q-.825 0-1.412-.587Q4 20.825 4 20V8.825q0-.4.15-.763.15-.362.425-.637l4.85-4.85q.275-.275.637-.425.363-.15.763-.15H18q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertFilled.displayName = 'AmauiIconMaterialSdCardAlertFilled';

export default IconMaterialSdCardAlertFilled;
