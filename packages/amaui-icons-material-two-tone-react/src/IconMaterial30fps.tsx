import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial30fps = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fps'

      short_name='30fps'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M2,5v3h6v2.5H3v3h5V16H2v3h6c1.66,0,3-1.34,3-3v-1.9c0-1.16-0.94-2.1-2.1-2.1c1.16,0,2.1-0.94,2.1-2.1V8 c0-1.66-1.34-3-3-3H2z M19,8v8h-4V8H19 M19,5h-4c-1.66,0-3,1.34-3,3v8c0,1.66,1.34,3,3,3h4c1.66,0,3-1.34,3-3V8 C22,6.34,20.66,5,19,5z"/></g></g>
    </Icon>
  );
});

IconMaterial30fps.displayName = 'AmauiIconMaterial30fps';

export default IconMaterial30fps;
