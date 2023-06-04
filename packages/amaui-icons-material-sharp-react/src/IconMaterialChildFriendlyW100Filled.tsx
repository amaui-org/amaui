import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChildFriendlyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildFriendlyW100Filled'

      short_name='ChildFriendly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 19.7q-.425 0-.712-.287-.288-.288-.288-.713t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.713q-.288.287-.713.287Zm7.7 0q-.425 0-.712-.287Q16 19.125 16 18.7t.288-.713q.287-.287.712-.287t.712.287q.288.288.288.713t-.288.713q-.287.287-.712.287ZM12.55 8.45l-2.9-3.5q.8-.275 1.575-.388Q12 4.45 12.8 4.45q.975 0 1.825.212.85.213 1.575.638ZM8.3 16.7V6.85l-.75-.9Q6.95 5.2 6.5 4.9q-.45-.3-.9-.3-.65 0-1.075.425Q4.1 5.45 4.1 6.1h-.7q0-.9.65-1.55t1.6-.65q.675 0 1.2.387.525.388 1.2 1.213l9.3 11.2Z"/>
    </Icon>
  );
});

IconMaterialChildFriendlyW100Filled.displayName = 'AmauiIconMaterialChildFriendlyW100Filled';

export default IconMaterialChildFriendlyW100Filled;
