import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownloadingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadingW100Filled'

      short_name='Downloading'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20.65q-1.65-.175-3.05-.925t-2.425-1.913Q4.5 16.65 3.925 15.15 3.35 13.65 3.35 12q0-3.35 2.188-5.825Q7.725 3.7 11.025 3.35v.7q-3 .425-4.988 2.675Q4.05 8.975 4.05 12q0 3.025 1.975 5.275Q8 19.525 11 19.95Zm1-4.55L7.9 12l.5-.5 3.25 3.25V7.9h.7v6.85l3.25-3.25.5.5Zm1 4.55v-.7q1.075-.15 2.062-.537.988-.388 1.838-1.063l.55.5q-1 .725-2.125 1.162-1.125.438-2.325.638ZM16.95 5.7q-.875-.65-1.862-1.075-.988-.425-2.063-.575v-.7q1.2.175 2.313.625 1.112.45 2.112 1.175Zm1.9 11.7-.5-.5q.65-.85 1.05-1.838.4-.987.55-2.062h.7q-.15 1.2-.612 2.325-.463 1.125-1.188 2.075Zm1.1-6.4q-.15-1.075-.55-2.062Q19 7.95 18.35 7.1l.55-.55q.675 1 1.113 2.125Q20.45 9.8 20.65 11Z"/>
    </Icon>
  );
});

IconMaterialDownloadingW100Filled.displayName = 'AmauiIconMaterialDownloadingW100Filled';

export default IconMaterialDownloadingW100Filled;
