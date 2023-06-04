import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOvenGenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OvenGenW100Filled'

      short_name='OvenGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 11.35h4v4.35h7.4v-4.35h4v6.85q0 .65-.425 1.075-.425.425-1.075.425H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2ZM9 15v-3.65h6V15Zm-4.7-4.35V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v4.85Zm3.65-2.4q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm4 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm4 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialOvenGenW100Filled.displayName = 'AmauiIconMaterialOvenGenW100Filled';

export default IconMaterialOvenGenW100Filled;
