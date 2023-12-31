import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownW100Filled'

      short_name='Markdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-376 97-97-19-20-64 63v-154h-28v154l-64-63-19 20 97 97ZM132-212v-536h696v536H132Zm104-164h28v-180h72v120h28v-120h72v180h28v-208H236v208Z"/>
    </Icon>
  );
});

IconMaterialMarkdownW100Filled.displayName = 'AmauiIconMaterialMarkdownW100Filled';

export default IconMaterialMarkdownW100Filled;
