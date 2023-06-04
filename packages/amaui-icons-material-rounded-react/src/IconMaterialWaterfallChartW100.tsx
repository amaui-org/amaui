import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterfallChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterfallChartW100'

      short_name='WaterfallChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.9 18.35q-.25 0-.425-.175t-.175-.425V5.25q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425v12.5q0 .25-.175.425t-.425.175Zm-13.8 0q-.25 0-.425-.175T4.5 17.75V13.6q0-.25.175-.425T5.1 13q.25 0 .425.175t.175.425v4.15q0 .25-.175.425t-.425.175Zm10.1-12.5q-.25 0-.425-.175T14.6 5.25q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425q0 .25-.175.425t-.425.175Zm-3.7 3q-.25 0-.425-.175T10.9 8.25v-2q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425v2q0 .25-.175.425t-.425.175ZM8.8 13.5q-.25 0-.425-.175T8.2 12.9v-2.15q0-.25.175-.425t.425-.175q.25 0 .425.175t.175.425v2.15q0 .25-.175.425T8.8 13.5Z"/>
    </Icon>
  );
});

IconMaterialWaterfallChartW100.displayName = 'AmauiIconMaterialWaterfallChartW100';

export default IconMaterialWaterfallChartW100;
