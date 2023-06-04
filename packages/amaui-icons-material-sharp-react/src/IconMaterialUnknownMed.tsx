import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownMed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownMed'

      short_name='UnknownMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 13v-3h9v3Zm11 0v-3h9v3Z"/>
    </Icon>
  );
});

IconMaterialUnknownMed.displayName = 'AmauiIconMaterialUnknownMed';

export default IconMaterialUnknownMed;
