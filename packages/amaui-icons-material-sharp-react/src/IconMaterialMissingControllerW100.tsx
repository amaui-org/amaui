import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMissingControllerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MissingControllerW100'

      short_name='MissingController'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m226-754-20-20q54-54 124-84t150-30q80 0 150 30t124 84l-20 20q-48-48-113.5-77T480-860q-75 0-140.5 29T226-754Zm112 112-20-20q33-33 73.5-49.5T480-728q48 0 88.5 16.5T642-662l-20 20q-27-27-63.5-42.5T480-700q-42 0-78.5 15.5T338-642ZM480-32q-45 0-76.5-31.5T372-140v-320q0-45 31.5-76.5T480-568q45 0 76.5 31.5T588-460v320q0 45-31.5 76.5T480-32Zm0-348q33 0 56.5-23.5T560-460q0-33-23.5-56.5T480-540q-33 0-56.5 23.5T400-460q0 33 23.5 56.5T480-380Z"/>
    </Icon>
  );
});

IconMaterialMissingControllerW100.displayName = 'AmauiIconMaterialMissingControllerW100';

export default IconMaterialMissingControllerW100;
