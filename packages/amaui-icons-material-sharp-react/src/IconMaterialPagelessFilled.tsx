import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPagelessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagelessFilled'

      short_name='Pageless'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-80v-320h80v240h280v80H40Zm520 0v-80h280v-240h80v320H560ZM40-560v-320h360v80H120v240H40Zm800 0v-240H560v-80h360v320h-80Z"/>
    </Icon>
  );
});

IconMaterialPagelessFilled.displayName = 'AmauiIconMaterialPagelessFilled';

export default IconMaterialPagelessFilled;
