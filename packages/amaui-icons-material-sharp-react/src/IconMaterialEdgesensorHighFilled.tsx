import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorHighFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorHighFilled'

      short_name='EdgesensorHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 14V7h2v7Zm-3 3v-7h2v7Zm22-3V7h2v7Zm-3 3v-7h2v7ZM6 22V2h12v20Zm2-5h8V7H8Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorHighFilled.displayName = 'AmauiIconMaterialEdgesensorHighFilled';

export default IconMaterialEdgesensorHighFilled;
