import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownCopyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownCopyFilled'

      short_name='MarkdownCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240v-640h520v640H280ZM120-80v-640h80v560h440v80H120Zm290-360h60v-180h40v120h60v-120h40v180h60v-240H410v240Z"/>
    </Icon>
  );
});

IconMaterialMarkdownCopyFilled.displayName = 'AmauiIconMaterialMarkdownCopyFilled';

export default IconMaterialMarkdownCopyFilled;
