import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleW100Filled'

      short_name='Shuffle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.275 9.85 4.8 5.375l.475-.475L9.75 9.375Zm5.25 9.5v-.7h3.55l-4.05-4.05.5-.5 4 4v-3.45h.7v4.7Zm-9.25-.25-.5-.5 13.25-13.25h-3.5v-.7h4.7v4.7h-.7v-3.5Z"/>
    </Icon>
  );
});

IconMaterialShuffleW100Filled.displayName = 'AmauiIconMaterialShuffleW100Filled';

export default IconMaterialShuffleW100Filled;
