import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageW100Filled'

      short_name='Garage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 20.7q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm3.7-7q-.275 0-.488-.213Q7.8 13.275 7.8 13t.212-.488q.213-.212.488-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm7 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-9.2-2.4v5.55q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V15.2h10v1.65q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V11.3l-1.45-4.15q-.05-.175-.188-.263-.137-.087-.312-.087h-7.5q-.175 0-.312.087-.138.088-.188.263Zm.9-.5 1.15-3.3h7.3l1.15 3.3Z"/>
    </Icon>
  );
});

IconMaterialGarageW100Filled.displayName = 'AmauiIconMaterialGarageW100Filled';

export default IconMaterialGarageW100Filled;
