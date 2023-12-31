import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMitreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MitreW100'

      short_name='Mitre'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-406v-148h80v-172h-80v-148h188v148h-80v172h80v148H560Zm28-28h132v-92H588v92Zm0-320h132v-92H588v92ZM212-86v-148h80v-172h-80v-148h80v-172h-80v-148h188v148h-80v172h80v148h-80v172h80v148H212Zm28-28h132v-92H240v92Zm0-320h132v-92H240v92Zm0-320h132v-92H240v92Zm414 274Zm0-320ZM306-160Zm0-320Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialMitreW100.displayName = 'AmauiIconMaterialMitreW100';

export default IconMaterialMitreW100;
