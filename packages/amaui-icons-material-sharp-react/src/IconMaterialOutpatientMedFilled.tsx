import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutpatientMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientMedFilled'

      short_name='OutpatientMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.5 15.5-1.425-1.4 1.1-1.1H16v-2h3.15l-1.075-1.075L19.5 8.5 23 12ZM2 5V3h12v2Zm4.5 12.5h3V15H12v-3H9.5V9.5h-3V12H4v3h2.5ZM1 21V6h14v15Z"/>
    </Icon>
  );
});

IconMaterialOutpatientMedFilled.displayName = 'AmauiIconMaterialOutpatientMedFilled';

export default IconMaterialOutpatientMedFilled;
