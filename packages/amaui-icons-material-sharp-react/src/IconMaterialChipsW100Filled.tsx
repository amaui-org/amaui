import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChipsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipsW100Filled'

      short_name='Chips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-466h348v-28H306v28ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialChipsW100Filled.displayName = 'AmauiIconMaterialChipsW100Filled';

export default IconMaterialChipsW100Filled;
