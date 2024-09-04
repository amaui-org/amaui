import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTitlecaseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitlecaseW100Filled'

      short_name='Titlecase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M363-295v-335H260q-6 0-11-4.5t-5-10.5q0-6 5-10.5t11-4.5h237q6 0 10.5 4.5T512-645q0 6-4.5 10.5T497-630H393v335q0 6.36-4.37 10.68-4.38 4.32-10.5 4.32-6.13 0-10.63-4.32-4.5-4.32-4.5-10.68Zm251-213h-40q-5.79 0-9.9-4.15-4.1-4.14-4.1-10 0-5.85 4.1-9.85 4.11-4 9.9-4h40v-73q0-5.94 4.04-9.97 4.05-4.03 10-4.03 5.96 0 9.96 4.03 4 4.03 4 9.97v73h60q5.79 0 9.9 4.15 4.1 4.14 4.1 10 0 5.85-4.1 9.85-4.11 4-9.9 4h-60v154q0 23 15 39t36 16h5q2 0 5-1 5-2 9 2.1 4 4.11 4 9.9 0 6-4 10.5t-9.78 5.17q-2.22.33-4.72.83-2.5.5-4.5.5-33 0-56-23.5T614-351v-157Z"/>
    </Icon>
  );
});

IconMaterialTitlecaseW100Filled.displayName = 'AmauiIconMaterialTitlecaseW100Filled';

export default IconMaterialTitlecaseW100Filled;
