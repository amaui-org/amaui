import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreW100Filled'

      short_name='More'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.35 12.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3.5 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3.5 0q.275 0 .487-.213.213-.212.213-.487t-.213-.488q-.212-.212-.487-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-7.825 5L4.45 12l4.025-5.7H19.55v11.4Z"/>
    </Icon>
  );
});

IconMaterialMoreW100Filled.displayName = 'AmauiIconMaterialMoreW100Filled';

export default IconMaterialMoreW100Filled;
