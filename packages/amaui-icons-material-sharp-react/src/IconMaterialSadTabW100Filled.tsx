import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSadTabW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SadTabW100Filled'

      short_name='SadTab'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M348 726h28v-28h208v29h28v-29h-28v-28H376v28h-28v28Zm14-152h28v-68h-28v68Zm208 0h28v-68h-28v68ZM132 844V348h308l40 40h348v456H132Z"/>
    </Icon>
  );
});

IconMaterialSadTabW100Filled.displayName = 'AmauiIconMaterialSadTabW100Filled';

export default IconMaterialSadTabW100Filled;
