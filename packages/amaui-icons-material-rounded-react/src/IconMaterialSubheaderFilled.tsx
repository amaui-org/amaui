import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubheaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubheaderFilled'

      short_name='Subheader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-560h280q17 0 28.5-11.5T600-600v-40q0-17-11.5-28.5T560-680H280q-17 0-28.5 11.5T240-640v40q0 17 11.5 28.5T280-560Zm-80 440q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialSubheaderFilled.displayName = 'AmauiIconMaterialSubheaderFilled';

export default IconMaterialSubheaderFilled;
