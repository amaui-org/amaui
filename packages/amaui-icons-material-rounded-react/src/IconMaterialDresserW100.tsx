import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDresserW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DresserW100'

      short_name='Dresser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.35V5.8q0-.65.425-1.075Q6.15 4.3 6.8 4.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.55H18v-2.3H6v2.3Zm.7-8.4h5.65V5H6.8q-.3 0-.55.25Q6 5.5 6 5.8Zm6.35-3.825H18V5.8q0-.3-.25-.55Q17.5 5 17.2 5h-4.85Zm0 3.825H18V8.825h-5.65Zm-1.7 3.4h2.7v-.7h-2.7ZM6 12.65v4.7h12v-4.7Zm0 4.7v-4.7 4.7Z"/>
    </Icon>
  );
});

IconMaterialDresserW100.displayName = 'AmauiIconMaterialDresserW100';

export default IconMaterialDresserW100;
