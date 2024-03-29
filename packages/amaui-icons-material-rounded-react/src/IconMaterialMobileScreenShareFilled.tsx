import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobileScreenShareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShareFilled'

      short_name='MobileScreenShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 15q-.425 0-.712-.288Q9 14.425 9 14v-.5q0-1.25.875-2.125T12 10.5h1v-.8q0-.35.3-.475t.55.125l1.8 1.8q.075.075.113.162.037.088.037.188 0 .05-.15.35l-1.8 1.8q-.25.25-.55.125-.3-.125-.3-.475v-.8h-1q-.425 0-.712.287-.288.288-.288.713v.5q0 .425-.287.712Q10.425 15 10 15Zm-3 8q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialMobileScreenShareFilled.displayName = 'AmauiIconMaterialMobileScreenShareFilled';

export default IconMaterialMobileScreenShareFilled;
