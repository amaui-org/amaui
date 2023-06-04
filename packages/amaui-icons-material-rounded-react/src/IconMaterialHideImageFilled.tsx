import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageFilled'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 18.15 5.85 3H19q.825 0 1.413.587Q21 4.175 21 5Zm-1.9 3.75-.9-.9H5q-.825 0-1.413-.587Q3 19.825 3 19V5.8l-.9-.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM7 17h7.175l-2.1-2.1-.825 1.1-1.85-2.475q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525Q6.7 17 7 17Z"/>
    </Icon>
  );
});

IconMaterialHideImageFilled.displayName = 'AmauiIconMaterialHideImageFilled';

export default IconMaterialHideImageFilled;
