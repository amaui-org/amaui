import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLargeW100Filled'

      short_name='PhotoSizeSelectLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.7q-.3 0-.5-.2t-.2-.5V8h10.2q.625 0 1.062.438Q16 8.875 16 9.5v10.2ZM7.125 18H13.2q.275 0 .375-.225.1-.225-.05-.425l-1.8-2.375q-.125-.15-.325-.15t-.325.15L9.4 17.25l-.925-1.225q-.125-.15-.325-.15t-.325.15L6.8 17.35q-.15.2-.037.425.112.225.362.225ZM4.3 5q0-.3.2-.5t.5-.2V5ZM11 5v-.7h2V5Zm8 0v-.7q.3 0 .5.2t.2.5ZM7 5v-.7h2V5Zm12 8v-2h.7v2Zm0 6.7V19h.7q0 .3-.2.5t-.5.2Zm0-10.95v-2h.7v2Zm0 8.5v-2h.7v2ZM15 5v-.7h2V5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectLargeW100Filled.displayName = 'AmauiIconMaterialPhotoSizeSelectLargeW100Filled';

export default IconMaterialPhotoSizeSelectLargeW100Filled;
