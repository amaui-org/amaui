import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMistFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MistFilled'

      short_name='Mist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-80h480v80H120Zm560 0v-80h160v80H680ZM120-360v-80h160v80H120Zm240 0v-80h480v80H360ZM120-520v-80h520v80H120Zm600 0v-80h120v80H720ZM120-680v-80h280v80H120Zm360 0v-80h360v80H480Z"/>
    </Icon>
  );
});

IconMaterialMistFilled.displayName = 'AmauiIconMaterialMistFilled';

export default IconMaterialMistFilled;
