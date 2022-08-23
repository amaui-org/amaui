import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvGenSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvGenSharpW100'
      short_name='TvGen'

      {...props}
    >
      <path d="M4.8 19v-1.3q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v9.4q0 .625-.437 1.062-.438.438-1.063.438V19h-.35l-.475-1.3h-12.7L5.15 19Zm0-2h14.4q.35 0 .575-.225Q20 16.55 20 16.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v9.4q0 .35.225.575Q4.45 17 4.8 17Zm7.2-5.5Z"/>
    </Icon>
  );
});

IconMaterialTvGenSharpW100.displayName = 'AmauiIconMaterialTvGenSharpW100';

export default IconMaterialTvGenSharpW100;
