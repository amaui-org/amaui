import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatQuoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteFilled'

      short_name='FormatQuote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.175 17q-.75 0-1.15-.637-.4-.638-.05-1.313L17 13h-2q-.825 0-1.412-.588Q13 11.825 13 11V8q0-.825.588-1.412Q14.175 6 15 6h3q.825 0 1.413.588Q20 7.175 20 8v4.525q0 .225-.038.463-.037.237-.162.437l-1.425 2.825q-.175.35-.5.55-.325.2-.7.2Zm-9 0q-.75 0-1.15-.637-.4-.638-.05-1.313L8 13H6q-.825 0-1.412-.588Q4 11.825 4 11V8q0-.825.588-1.412Q5.175 6 6 6h3q.825 0 1.413.588Q11 7.175 11 8v4.525q0 .225-.037.463-.038.237-.163.437L9.375 16.25q-.175.35-.5.55-.325.2-.7.2Z"/>
    </Icon>
  );
});

IconMaterialFormatQuoteFilled.displayName = 'AmauiIconMaterialFormatQuoteFilled';

export default IconMaterialFormatQuoteFilled;
