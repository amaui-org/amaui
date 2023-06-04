import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImage'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21 18.15-2-2V5H7.85l-2-2H19q.825 0 1.413.587Q21 4.175 21 5Zm-1.9 3.75-.9-.9H5q-.825 0-1.413-.587Q3 19.825 3 19V5.8l-.9-.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM11.25 16l.825-1.1L5 7.825V19h11.175l-2-2H7q-.3 0-.45-.275-.15-.275.05-.525l2-2.675q.15-.2.4-.2t.4.2Zm.75-4Zm-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialHideImage.displayName = 'AmauiIconMaterialHideImage';

export default IconMaterialHideImage;
