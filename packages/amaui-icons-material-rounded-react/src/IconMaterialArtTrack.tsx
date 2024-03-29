import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArtTrack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArtTrack'

      short_name='ArtTrack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19q-.825 0-1.412-.587Q1 17.825 1 17V7q0-.825.588-1.412Q2.175 5 3 5h10q.825 0 1.413.588Q15 6.175 15 7v10q0 .825-.587 1.413Q13.825 19 13 19Zm0-2h10V7H3v10Zm15 2q-.425 0-.712-.288Q17 18.425 17 18V5.975q0-.425.288-.7Q17.575 5 18 5t.712.287Q19 5.575 19 6v12.025q0 .425-.288.7Q18.425 19 18 19Zm4 0q-.425 0-.712-.288Q21 18.425 21 18V5.975q0-.425.288-.7Q21.575 5 22 5t.712.287Q23 5.575 23 6v12.025q0 .425-.288.7Q22.425 19 22 19ZM4.75 15h6.5q.25 0 .35-.2.1-.2-.05-.4L9.7 11.9q-.125-.15-.3-.15t-.3.15L7.5 14l-1.1-1.45q-.125-.15-.3-.15t-.3.15L4.45 14.4q-.125.2-.025.4t.325.2ZM3 7v10V7Z"/>
    </Icon>
  );
});

IconMaterialArtTrack.displayName = 'AmauiIconMaterialArtTrack';

export default IconMaterialArtTrack;
