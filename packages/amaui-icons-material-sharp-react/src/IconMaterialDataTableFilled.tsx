import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataTableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataTableFilled'

      short_name='DataTable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-640h720v-160H120v160Zm0 240h720v-160H120v160Zm0 240h720v-160H120v160Zm40-520v-80h80v80h-80Zm0 240v-80h80v80h-80Zm0 240v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialDataTableFilled.displayName = 'AmauiIconMaterialDataTableFilled';

export default IconMaterialDataTableFilled;
