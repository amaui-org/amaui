import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalDiningW100'

      short_name='LocalDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.275 20.1-.5-.5 10.1-10.1q-.525-1.25-.25-2.363.275-1.112 1.25-2.087.875-.875 2.3-1.3 1.425-.425 2.4.55.975.975.55 2.4-.425 1.425-1.3 2.3-.975.975-2.087 1.25-1.113.275-2.363-.25l-2 2 7.6 7.6-.5.5-7.6-7.55Zm3.1-8.4L4.675 9q-1.05-1.05-1.162-2.475Q3.4 5.1 4.275 3.9l5.45 5.45Z"/>
    </Icon>
  );
});

IconMaterialLocalDiningW100.displayName = 'AmauiIconMaterialLocalDiningW100';

export default IconMaterialLocalDiningW100;
