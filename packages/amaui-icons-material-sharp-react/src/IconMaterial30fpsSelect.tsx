import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial30fpsSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsSelect'

      short_name='30fpsSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 14v-2h5v-2H4V8h5V6H4V4h7v10Zm9 0V4h7v10Zm2-2h3V6h-3ZM3 22v-5h2v5Zm4 0v-5h2v5Zm4 0v-5h2v5Zm4 0v-5h6v5Z"/>
    </Icon>
  );
});

IconMaterial30fpsSelect.displayName = 'AmauiIconMaterial30fpsSelect';

export default IconMaterial30fpsSelect;
