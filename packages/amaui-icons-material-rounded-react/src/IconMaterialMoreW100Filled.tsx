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
      <path d="M9.35 12.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3.5 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3.5 0q.275 0 .487-.213.213-.212.213-.487t-.213-.488q-.212-.212-.487-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-6.7 5q-.575 0-1.037-.275-.463-.275-.813-.725l-2.725-3.825Q4.8 12.475 4.8 12t.275-.875L7.8 7.25q.325-.45.813-.7Q9.1 6.3 9.65 6.3h8.4q.625 0 1.063.438.437.437.437 1.062v8.4q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialMoreW100Filled.displayName = 'AmauiIconMaterialMoreW100Filled';

export default IconMaterialMoreW100Filled;
