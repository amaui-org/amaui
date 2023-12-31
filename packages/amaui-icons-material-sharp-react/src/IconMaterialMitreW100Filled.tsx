import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMitreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MitreW100Filled'

      short_name='Mitre'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-406v-148h80v-172h-80v-148h188v148h-80v172h80v148H560ZM212-86v-148h80v-172h-80v-148h80v-172h-80v-148h188v148h-80v172h80v148h-80v172h80v148H212Z"/>
    </Icon>
  );
});

IconMaterialMitreW100Filled.displayName = 'AmauiIconMaterialMitreW100Filled';

export default IconMaterialMitreW100Filled;
