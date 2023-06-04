import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer10SelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10SelectW100'

      short_name='Timer10Select'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.6 17.15h5.3V6.85H8.6Zm-.7.7V6.15h6.7v11.7Zm-4 0v-11h-2v-.7h2.7v11.7Zm13.5 0v-.7h4v-2.3h-4v-3.7h4.7v.7h-4v2.3h4v3.7Z"/>
    </Icon>
  );
});

IconMaterialTimer10SelectW100.displayName = 'AmauiIconMaterialTimer10SelectW100';

export default IconMaterialTimer10SelectW100;
