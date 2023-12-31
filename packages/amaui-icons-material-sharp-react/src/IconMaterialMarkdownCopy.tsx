import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownCopy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownCopy'

      short_name='MarkdownCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240v-640h520v640H280Zm80-80h360v-480H360v480ZM120-80v-640h80v560h440v80H120Zm290-360h60v-180h40v120h60v-120h40v180h60v-240H410v240Zm-50 120v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMarkdownCopy.displayName = 'AmauiIconMaterialMarkdownCopy';

export default IconMaterialMarkdownCopy;
