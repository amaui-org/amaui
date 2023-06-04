import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvGenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenW100Filled'

      short_name='TvGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 19v-1.3q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v9.4q0 .625-.437 1.062-.438.438-1.063.438V19h-.35l-.475-1.3h-12.7L5.15 19Z"/>
    </Icon>
  );
});

IconMaterialTvGenW100Filled.displayName = 'AmauiIconMaterialTvGenW100Filled';

export default IconMaterialTvGenW100Filled;
