import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffW100'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 21.2-7.125-7.125L6.55 19.7H4.575v-1.975L10.2 12.1 2.8 4.7l.5-.5 16.5 16.5ZM5.275 19h.975l5.425-5.425-.475-.5-.5-.475-5.425 5.425Zm6.4-5.425-.475-.5-.5-.475.975.975Zm2.4-1.4-.5-.5 2.95-2.95-.975-.975-2.95 2.95-.5-.5 3.45-3.45 1.975 1.975Zm3.95-3.95L16.05 6.25l1.675-1.675L19.7 6.55Zm-4.925 2.95Z"/>
    </Icon>
  );
});

IconMaterialEditOffW100.displayName = 'AmauiIconMaterialEditOffW100';

export default IconMaterialEditOffW100;
