import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLarge'

      short_name='PhotoSizeSelectLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V7h12q.825 0 1.413.587Q17 8.175 17 9v12Zm1-3h8q.3 0 .45-.275.15-.275-.05-.525L12 14.025q-.15-.2-.4-.2t-.4.2L9 17l-1.2-1.625q-.15-.2-.4-.2t-.4.2L5.6 17.2q-.2.25-.062.525Q5.675 18 6 18ZM3 5q0-.825.587-1.413Q4.175 3 5 3v2Zm8 0V3h2v2Zm8 0V3q.825 0 1.413.587Q21 4.175 21 5ZM7 5V3h2v2Zm12 8v-2h2v2Zm0 8v-2h2q0 .825-.587 1.413Q19.825 21 19 21Zm0-12V7h2v2Zm0 8v-2h2v2ZM15 5V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectLarge.displayName = 'AmauiIconMaterialPhotoSizeSelectLarge';

export default IconMaterialPhotoSizeSelectLarge;
