import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Photo'

      short_name='Photo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h10q.3 0 .45-.275.15-.275-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16 9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525Q6.7 17 7 17Zm-2 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialPhoto.displayName = 'AmauiIconMaterialPhoto';

export default IconMaterialPhoto;
