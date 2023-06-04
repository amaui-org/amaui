import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyRestroomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyRestroomW100Filled'

      short_name='FamilyRestroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 5.75q-.65 0-1.125-.475T16.4 4.15q0-.65.475-1.125T18 2.55q.65 0 1.125.475T19.6 4.15q0 .65-.475 1.125T18 5.75Zm-1.35 15.6V11.075h-1.5L16.7 7.1h2.6l3.2 8.1h-2.7v6.15ZM12.5 11.4q-.525 0-.887-.363-.363-.362-.363-.887t.363-.888q.362-.362.887-.362t.887.362q.363.363.363.888t-.363.887q-.362.363-.887.363Zm-7-5.65q-.65 0-1.125-.475T3.9 4.15q0-.65.475-1.125T5.5 2.55q.65 0 1.125.475T7.1 4.15q0 .65-.475 1.125T5.5 5.75Zm-1.7 15.6V14.9H2.1V7.55h6.8v7.35H7.2v6.45Zm7.55 0V18h-1v-5.5h4.3V18h-1v3.35Z"/>
    </Icon>
  );
});

IconMaterialFamilyRestroomW100Filled.displayName = 'AmauiIconMaterialFamilyRestroomW100Filled';

export default IconMaterialFamilyRestroomW100Filled;
