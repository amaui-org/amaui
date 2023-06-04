import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial60fpsSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSelect'

      short_name='60fpsSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 14V4h7v2H6v2h5v6Zm2-2h3v-2H6Zm7 2V4h7v10Zm2-2h3V6h-3ZM3 22v-5h2v5Zm4 0v-5h2v5Zm4 0v-5h2v5Zm4 0v-5h6v5Z"/>
    </Icon>
  );
});

IconMaterial60fpsSelect.displayName = 'AmauiIconMaterial60fpsSelect';

export default IconMaterial60fpsSelect;
