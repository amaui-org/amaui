import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachFileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileW100'

      short_name='AttachFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 21.7q-2.025 0-3.463-1.438Q6.6 18.825 6.6 16.8V5.5q0-1.475 1.038-2.513Q8.675 1.95 10.15 1.95t2.513 1.037Q13.7 4.025 13.7 5.5v10.15q0 .925-.638 1.562-.637.638-1.562.638t-1.562-.638Q9.3 16.575 9.3 15.65v-9.8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.8q0 .625.438 1.062.437.438 1.062.438.65 0 1.075-.438.425-.437.425-1.062V5.5q0-1.2-.825-2.025T10.15 2.65q-1.2 0-2.025.825T7.3 5.5v11.3q0 1.75 1.225 2.975T11.5 21q1.75 0 2.975-1.225T15.7 16.8V5.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V16.8q0 2.025-1.437 3.462Q13.525 21.7 11.5 21.7Z"/>
    </Icon>
  );
});

IconMaterialAttachFileW100.displayName = 'AmauiIconMaterialAttachFileW100';

export default IconMaterialAttachFileW100;
