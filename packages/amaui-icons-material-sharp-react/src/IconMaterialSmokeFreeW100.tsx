import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmokeFreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokeFreeW100'

      short_name='SmokeFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.05 15.2v-1.4h.7v1.4Zm-1-.6-.8-.8h.8Zm2.7.6v-1.4h.7v1.4Zm.55 6.5-6.5-6.5H3.45v-1.4h8.95L2.8 4.2l.5-.5 17.5 17.5Zm-2.25-9.4V11q0-.875-.575-1.463Q16.9 8.95 16.1 8.95h-1.55q-1.05 0-1.8-.775T12 6.3q0-1.025.75-1.738.75-.712 1.8-.712v.7q-.75 0-1.3.5T12.7 6.3q0 .75.55 1.35.55.6 1.3.6h1.55q1.1 0 1.875.812.775.813.775 1.938v1.3Zm1.7 0v-2.25q0-1.65-1.15-2.65t-2.85-1v-.7q.75 0 1.275-.525.525-.525.525-1.275h.7q0 .725-.3 1.225-.3.5-.75.775 1.275.35 2.263 1.4.987 1.05.987 2.75v2.25Z"/>
    </Icon>
  );
});

IconMaterialSmokeFreeW100.displayName = 'AmauiIconMaterialSmokeFreeW100';

export default IconMaterialSmokeFreeW100;
