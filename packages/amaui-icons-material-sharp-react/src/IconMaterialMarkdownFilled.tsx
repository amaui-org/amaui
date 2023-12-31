import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownFilled'

      short_name='Markdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-360 120-120-42-43-48 48v-125h-60v125l-48-48-42 43 120 120ZM80-160v-640h800v640H80Zm140-200h60v-180h40v120h60v-120h40v180h60v-240H220v240Z"/>
    </Icon>
  );
});

IconMaterialMarkdownFilled.displayName = 'AmauiIconMaterialMarkdownFilled';

export default IconMaterialMarkdownFilled;
