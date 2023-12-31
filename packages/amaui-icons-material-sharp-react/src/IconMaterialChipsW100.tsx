import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChipsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChipsW100'

      short_name='Chips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-466h348v-28H306v28ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialChipsW100.displayName = 'AmauiIconMaterialChipsW100';

export default IconMaterialChipsW100;
