import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMixtureMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MixtureMedW100Filled'

      short_name='MixtureMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 16.2H6.3q-.625 0-1.062-.438Q4.8 15.325 4.8 14.7V7.5h-.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H7.4V5h-.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H9q.15 0 .25.1t.1.25q0 .15-.1.25T9 5h-.9v1.8h2.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.35v7.2q0 .625-.437 1.062-.438.438-1.063.438H8.1v3.875q0 .1-.1.163-.1.062-.2-.013l-.25-.2q-.075-.05-.112-.125-.038-.075-.038-.175Zm8.85 3.7q-1.225 0-2.087-.862-.863-.863-.863-2.088v-6.7q0-1.225.863-2.088.862-.862 2.087-.862t2.088.862q.862.863.862 2.088v6.7q0 1.225-.862 2.088-.863.862-2.088.862ZM6.3 15.5h2.9q.35 0 .575-.225Q10 15.05 10 14.7v-1.4H8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2v-2.2H8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T8 9.7h2V7.5H5.5v7.2q0 .35.225.575.225.225.575.225Zm7.7.1h4.5v-4H14Z"/>
    </Icon>
  );
});

IconMaterialMixtureMedW100Filled.displayName = 'AmauiIconMaterialMixtureMedW100Filled';

export default IconMaterialMixtureMedW100Filled;
