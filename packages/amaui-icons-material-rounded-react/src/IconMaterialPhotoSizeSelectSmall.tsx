import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectSmall'

      short_name='PhotoSizeSelectSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19v-8h8q.825 0 1.413.587Q13 12.175 13 13v8ZM3 9V7h2v2Zm0-4q0-.825.587-1.413Q4.175 3 5 3v2Zm2 14h6q.3 0 .45-.275.15-.275-.05-.525l-1.6-2.175q-.125-.2-.387-.2-.263 0-.413.2L7.5 18l-1-1.325q-.15-.2-.4-.187-.25.012-.4.212l-1.125 1.5q-.2.25-.05.525Q4.675 19 5 19ZM7 5V3h2v2Zm4 0V3h2v2Zm4 16v-2h2v2Zm0-16V3h2v2Zm4 16v-2h2q0 .825-.587 1.413Q19.825 21 19 21Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3q.825 0 1.413.587Q21 4.175 21 5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectSmall.displayName = 'AmauiIconMaterialPhotoSizeSelectSmall';

export default IconMaterialPhotoSizeSelectSmall;
