import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPost = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Post'

      short_name='Post'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120Zm-40-160H240v60h480v-60Zm-480-60h480v-60H240v60Zm0-140h480v-240H240v240Zm0 200v60-60Zm0-60v-60 60Zm0-140v-240 240Zm0 80v-80 80Zm0 120v-60 60Z"/>
    </Icon>
  );
});

IconMaterialPost.displayName = 'AmauiIconMaterialPost';

export default IconMaterialPost;
