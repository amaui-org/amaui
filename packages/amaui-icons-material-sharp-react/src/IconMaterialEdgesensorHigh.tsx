import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorHigh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHigh'

      short_name='EdgesensorHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 14V7h2v7Zm-3 3v-7h2v7Zm22-3V7h2v7Zm-3 3v-7h2v7ZM6 22V2h12v20Zm2-5h8V7H8ZM8 5h8V4H8Zm0 15h8v-1H8ZM8 5V4v1Zm0 15v-1 1Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHigh.displayName = 'AmauiIconMaterialEdgesensorHigh';

export default IconMaterialEdgesensorHigh;
