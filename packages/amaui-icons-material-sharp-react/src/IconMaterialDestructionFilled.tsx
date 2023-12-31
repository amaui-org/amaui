import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDestructionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DestructionFilled'

      short_name='Destruction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-320h720v320H120Zm141-380L60-574l240-40-65-235 199 141 120-212 40 240 235-65-141 199 152 86H261Z"/>
    </Icon>
  );
});

IconMaterialDestructionFilled.displayName = 'AmauiIconMaterialDestructionFilled';

export default IconMaterialDestructionFilled;
