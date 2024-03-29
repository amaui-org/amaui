import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoAlbum = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoAlbum'

      short_name='PhotoAlbum'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v16q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V4h-2v6.125q0 .3-.25.437-.25.138-.5-.012L13.5 9.5l-1.75 1.05q-.25.15-.5.012-.25-.137-.25-.437V4H6v16Zm2-2h8q.3 0 .45-.275.15-.275-.05-.525l-2.375-3.175q-.15-.2-.4-.2t-.4.2L11 17l-1.225-1.65q-.15-.2-.4-.2t-.4.2L7.6 17.2q-.2.25-.05.525Q7.7 18 8 18Zm3-14h5ZM6 4h12Z"/>
    </Icon>
  );
});

IconMaterialPhotoAlbum.displayName = 'AmauiIconMaterialPhotoAlbum';

export default IconMaterialPhotoAlbum;
