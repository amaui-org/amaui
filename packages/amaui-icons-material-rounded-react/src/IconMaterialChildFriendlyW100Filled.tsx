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
      <path d="M9.3 19.7q-.425 0-.712-.287-.288-.288-.288-.713t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.713q-.288.287-.713.287Zm7.7 0q-.425 0-.712-.287Q16 19.125 16 18.7t.288-.713q.287-.287.712-.287t.712.287q.288.288.288.713t-.288.713q-.287.287-.712.287ZM12.55 8.45l-2.9-3.5q.8-.275 1.575-.388Q12 4.45 12.8 4.45q.775 0 1.463.125.687.125 1.287.4.275.125.3.362.025.238-.2.438ZM12 16.7q-1.55 0-2.625-1.075T8.3 13V6.85l-.75-.9Q6.95 5.2 6.5 4.9q-.45-.3-.9-.3-.55 0-.95.325-.4.325-.525.825-.05.15-.15.25-.1.1-.225.1-.15 0-.25-.113-.1-.112-.075-.237.125-.8.75-1.325Q4.8 3.9 5.65 3.9q.675 0 1.2.387.525.388 1.2 1.213l8.35 10.05q.3.35.1.75-.2.4-.65.4Z"/>
    </Icon>
  );
});

IconMaterialChildFriendlyW100Filled.displayName = 'AmauiIconMaterialChildFriendlyW100Filled';

export default IconMaterialChildFriendlyW100Filled;
