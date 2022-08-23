import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvGenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenSharpW100Filled'
      short_name='TvGen'

      {...props}
    >
      <path d="M4.8 19v-1.3q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v9.4q0 .625-.437 1.062-.438.438-1.063.438V19h-.35l-.475-1.3h-12.7L5.15 19Z"/>
    </Icon>
  );
});

IconMaterialTvGenSharpW100Filled.displayName = 'AmauiIconMaterialTvGenSharpW100Filled';

export default IconMaterialTvGenSharpW100Filled;
