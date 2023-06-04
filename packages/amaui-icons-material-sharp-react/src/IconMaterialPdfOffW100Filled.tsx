import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPdfOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PdfOffW100Filled'

      short_name='PdfOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M284 572v-72h72v72h-72Zm-28 108h28v-80h100v-84l-44-44h-84v208Zm176 0h84l40-28h-96v-96l-28-28v152ZM172 884V294l-4-30 620 620H172Zm596 20L148 284l20-20 620 620-20 20ZM285 268h503v503L644 627v-31h86v-28h-86v-68h86v-28H616v127l-56-56v-27l-44-44h-27L285 268Z"/>
    </Icon>
  );
});

IconMaterialPdfOffW100Filled.displayName = 'AmauiIconMaterialPdfOffW100Filled';

export default IconMaterialPdfOffW100Filled;
