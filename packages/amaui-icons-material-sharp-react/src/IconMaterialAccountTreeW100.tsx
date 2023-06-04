import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountTreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeW100'

      short_name='AccountTree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.65 20.35v-3h-4v-10h-3.3v3h-5.7v-6.7h5.7v3h7.3v-3h5.7v6.7h-5.7v-3h-3.3v9.3h3.3v-3h5.7v6.7Zm-12.3-16v5.3Zm13 10v5.3Zm0-10v5.3Zm0 5.3h4.3v-5.3h-4.3Zm0 10h4.3v-5.3h-4.3Zm-13-10h4.3v-5.3h-4.3Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeW100.displayName = 'AmauiIconMaterialAccountTreeW100';

export default IconMaterialAccountTreeW100;
