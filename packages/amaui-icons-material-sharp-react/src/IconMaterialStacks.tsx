import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStacks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stacks'

      short_name='Stacks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/>
    </Icon>
  );
});

IconMaterialStacks.displayName = 'AmauiIconMaterialStacks';

export default IconMaterialStacks;
