import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDownloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownloadW100'

      short_name='CloudDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.65 1.175-2.925T6.35 10.3q.2-1.875 1.788-3.413Q9.725 5.35 11.65 5.35q.275 0 .488.212.212.213.212.488v7.65l2.2-2.2.5.5L12 15.05 8.95 12l.5-.5 2.2 2.2V6.05q-1.875 0-3.263 1.575Q7 9.2 7 11h-.5q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18h12q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-1.25-.55-2.287Q15.9 7.675 15 7v-.85q1.275.75 1.988 2.05.712 1.3.712 2.8v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.925 2.275-.925.925-2.275.925Zm5.5-7.025Z"/>
    </Icon>
  );
});

IconMaterialCloudDownloadW100.displayName = 'AmauiIconMaterialCloudDownloadW100';

export default IconMaterialCloudDownloadW100;
