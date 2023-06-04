import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalRule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRule'

      short_name='HorizontalRule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 13q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h14q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 13 19 13Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRule.displayName = 'AmauiIconMaterialHorizontalRule';

export default IconMaterialHorizontalRule;
