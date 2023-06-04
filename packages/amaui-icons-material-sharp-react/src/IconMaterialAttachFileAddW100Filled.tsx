import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachFileAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileAddW100Filled'

      short_name='AttachFileAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 21.7q-2.025 0-3.463-1.438Q6.6 18.825 6.6 16.8V5.5q0-1.475 1.038-2.513Q8.675 1.95 10.15 1.95t2.513 1.037Q13.7 4.025 13.7 5.5v8.65H13V5.5q0-1.2-.825-2.025T10.15 2.65q-1.2 0-2.025.825T7.3 5.5v11.3q0 1.75 1.225 2.975T11.5 21q.75 0 1.425-.25t1.225-.7v.875q-.575.375-1.25.575-.675.2-1.4.2Zm5.15-1.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-5.15-3.2v.7q-.925 0-1.562-.638-.638-.637-.638-1.562V5.5h.7v10.15q0 .625.438 1.062.437.438 1.062.438Zm4.2-5.85V5.5h.7v5.8Z"/>
    </Icon>
  );
});

IconMaterialAttachFileAddW100Filled.displayName = 'AmauiIconMaterialAttachFileAddW100Filled';

export default IconMaterialAttachFileAddW100Filled;
