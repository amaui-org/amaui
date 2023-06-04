import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaddingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingW100Filled'

      short_name='Padding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.15 8.85q.275 0 .487-.213.213-.212.213-.487t-.213-.488q-.212-.212-.487-.212t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213Zm3.85 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 7.45 12 7.45t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3.85 0q.275 0 .487-.213.213-.212.213-.487t-.213-.488q-.212-.212-.487-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPaddingW100Filled.displayName = 'AmauiIconMaterialPaddingW100Filled';

export default IconMaterialPaddingW100Filled;
