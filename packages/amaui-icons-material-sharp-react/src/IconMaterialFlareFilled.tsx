import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlareFilled'

      short_name='Flare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 13v-2h6v2Zm6.75-3.85-2.1-2.1 1.4-1.4 2.1 2.1ZM11 7V1h2v6Zm5.25 2.15-1.4-1.4 2.1-2.1 1.4 1.4ZM17 13v-2h6v2Zm-5 2q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15Zm4.95 3.35-2.1-2.1 1.4-1.4 2.1 2.1Zm-9.9 0-1.4-1.4 2.1-2.1 1.4 1.4ZM11 23v-6h2v6Z"/>
    </Icon>
  );
});

IconMaterialFlareFilled.displayName = 'AmauiIconMaterialFlareFilled';

export default IconMaterialFlareFilled;
