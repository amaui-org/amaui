import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatInkHighlighter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighter'

      short_name='FormatInkHighlighter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.5 18 3.15-3.15-.05-.05q-.6-.6-.6-1.4 0-.8.6-1.4L16 2.6q.6-.6 1.4-.6.8 0 1.4.6l2.6 2.6q.6.6.6 1.4 0 .8-.6 1.4L12 17.4q-.6.6-1.4.6-.8 0-1.4-.6l-.05-.05-.65.65Zm10.8-8.3Zm1.275 1.325-2.6-2.6-4.95 4.95 2.6 2.6ZM2 24v-4h20v4Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighter.displayName = 'AmauiIconMaterialFormatInkHighlighter';

export default IconMaterialFormatInkHighlighter;
