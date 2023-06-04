import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPdfOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PdfOffW100'

      short_name='PdfOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M284 572h72v-72h-72v72Zm-28 108V472h84l44 44v84H284v80h-28Zm176 0V528l28 28v96h96l-40 28h-84Zm128-137-71-71h27l44 44v27Zm84 84-28-28V472h114v28h-86v68h86v28h-86v31Zm144 144-28-28V296H313l-28-28h503v503ZM172 884V271l28 25v560h560l25 28H172Zm600 24L148 284l20-20 624 624-20 20ZM460 596Zm77-77Z"/>
    </Icon>
  );
});

IconMaterialPdfOffW100.displayName = 'AmauiIconMaterialPdfOffW100';

export default IconMaterialPdfOffW100;
