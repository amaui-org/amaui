import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPagelessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagelessW100'

      short_name='Pageless'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-132v-250h28v222h262v28H92Zm486 0v-28h262v-222h28v250H578ZM92-577v-251h290v28H120v223H92Zm748 0v-223H578v-28h290v251h-28Z"/>
    </Icon>
  );
});

IconMaterialPagelessW100.displayName = 'AmauiIconMaterialPagelessW100';

export default IconMaterialPagelessW100;
