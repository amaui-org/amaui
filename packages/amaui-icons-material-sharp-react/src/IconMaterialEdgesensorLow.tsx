import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLow'

      short_name='EdgesensorLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22V2h12v20Zm2-5h8V7H8ZM8 5h8V4H8Zm0 15h8v-1H8Zm-6-6V7h2v7Zm18 3v-7h2v7ZM8 5V4v1Zm0 15v-1 1Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLow.displayName = 'AmauiIconMaterialEdgesensorLow';

export default IconMaterialEdgesensorLow;
