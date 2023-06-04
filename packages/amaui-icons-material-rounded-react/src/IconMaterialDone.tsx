import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Done'

      short_name='Done'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 17.575q-.2 0-.375-.063Q9 17.45 8.85 17.3L4.55 13q-.275-.275-.263-.713.013-.437.288-.712.275-.275.7-.275.425 0 .7.275L9.55 15.15l8.475-8.475q.275-.275.713-.275.437 0 .712.275.275.275.275.712 0 .438-.275.713l-9.2 9.2q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialDone.displayName = 'AmauiIconMaterialDone';

export default IconMaterialDone;
