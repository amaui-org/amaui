import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleFilled'

      short_name='Shuffle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.175 10.575 4 5.4 5.4 4l5.175 5.175ZM14 20v-2h2.6l-3.2-3.2 1.425-1.425L18 16.55V14h2v6Zm-8.6 0L4 18.6 16.6 6H14V4h6v6h-2V7.4Z"/>
    </Icon>
  );
});

IconMaterialShuffleFilled.displayName = 'AmauiIconMaterialShuffleFilled';

export default IconMaterialShuffleFilled;
