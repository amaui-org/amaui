import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeMini = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMini'

      short_name='HomeMini'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19q-2.9 0-4.95-2.05Q2 14.9 2 12q0-.95.463-2.15.462-1.2 1.612-2.288 1.15-1.087 3.075-1.825Q9.075 5 12 5t4.85.737q1.925.738 3.075 1.825 1.15 1.088 1.613 2.288Q22 11.05 22 12q0 2.9-2.05 4.95Q17.9 19 15 19Zm.15-2h5.7q1.575 0 2.862-.837Q19 15.325 19.6 14H4.4q.6 1.325 1.887 2.163Q7.575 17 9.15 17ZM12 14Zm0-1Zm-8-1h16q0-.75-.4-1.625T18.263 8.75Q17.325 8 15.787 7.5 14.25 7 12 7t-3.775.5Q6.7 8 5.763 8.75q-.938.75-1.351 1.625Q4 11.25 4 12Zm8 0Z"/>
    </Icon>
  );
});

IconMaterialHomeMini.displayName = 'AmauiIconMaterialHomeMini';

export default IconMaterialHomeMini;
