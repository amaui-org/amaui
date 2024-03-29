import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardHideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHideFilled'

      short_name='KeyboardHide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.825 0-1.412-.587Q2 15.825 2 15V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v10q0 .825-.587 1.413Q20.825 17 20 17Zm7-9h2V6h-2Zm0 3h2V9h-2ZM8 8h2V6H8Zm0 3h2V9H8Zm-3 0h2V9H5Zm0-3h2V6H5Zm4 6h6q.425 0 .713-.288Q16 13.425 16 13t-.287-.713Q15.425 12 15 12H9q-.425 0-.712.287Q8 12.575 8 13t.288.712Q8.575 14 9 14Zm5-3h2V9h-2Zm0-3h2V6h-2Zm3 3h2V9h-2Zm0-3h2V6h-2Zm-5 14.8q-.05 0-.35-.15l-2.8-2.8q-.25-.25-.125-.55.125-.3.475-.3h5.6q.35 0 .475.3t-.125.55l-2.8 2.8q-.05.05-.35.15Z"/>
    </Icon>
  );
});

IconMaterialKeyboardHideFilled.displayName = 'AmauiIconMaterialKeyboardHideFilled';

export default IconMaterialKeyboardHideFilled;
