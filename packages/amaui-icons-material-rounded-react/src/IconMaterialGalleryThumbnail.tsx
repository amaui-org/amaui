import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGalleryThumbnail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GalleryThumbnail'

      short_name='GalleryThumbnail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19q-.825 0-1.412-.587Q1 17.825 1 17V7q0-.825.588-1.412Q2.175 5 3 5h10q.825 0 1.413.588Q15 6.175 15 7v10q0 .825-.587 1.413Q13.825 19 13 19Zm15-8q-.425 0-.712-.288Q17 10.425 17 10V6q0-.425.288-.713Q17.575 5 18 5h4q.425 0 .712.287Q23 5.575 23 6v4q0 .425-.288.712Q22.425 11 22 11Zm1-2h2V7h-2ZM3 17h10V7H3v10Zm2-2h6q.3 0 .45-.275.15-.275-.05-.525l-1.625-2.175q-.15-.2-.4-.2t-.4.2L7.5 14l-.975-1.3q-.15-.2-.4-.2t-.4.2L4.6 14.2q-.2.25-.05.525Q4.7 15 5 15Zm13 4q-.425 0-.712-.288Q17 18.425 17 18v-4q0-.425.288-.713Q17.575 13 18 13h4q.425 0 .712.287.288.288.288.713v4q0 .425-.288.712Q22.425 19 22 19Zm1-2h2v-2h-2ZM3 17V7v10Zm16-8V7v2Zm0 8v-2 2Z"/>
    </Icon>
  );
});

IconMaterialGalleryThumbnail.displayName = 'AmauiIconMaterialGalleryThumbnail';

export default IconMaterialGalleryThumbnail;
