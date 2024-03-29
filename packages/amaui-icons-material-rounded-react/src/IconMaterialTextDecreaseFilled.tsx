import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextDecreaseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextDecreaseFilled'

      short_name='TextDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 19q-.675 0-1-.45-.325-.45-.075-1.1l4.25-11.3q.2-.475.688-.812Q7 5 7.525 5q.5 0 .975.338.475.337.675.812L13.4 17.425q.25.65-.062 1.113Q13.025 19 12.3 19q-.275 0-.55-.188-.275-.187-.375-.462l-1.05-2.925h-5.65l-1.025 2.9q-.1.275-.387.475-.288.2-.613.2Zm2.75-5.6h4.2L7.55 7.6h-.1ZM16 13q-.425 0-.712-.288Q15 12.425 15 12t.288-.713Q15.575 11 16 11h6q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13Z"/>
    </Icon>
  );
});

IconMaterialTextDecreaseFilled.displayName = 'AmauiIconMaterialTextDecreaseFilled';

export default IconMaterialTextDecreaseFilled;
