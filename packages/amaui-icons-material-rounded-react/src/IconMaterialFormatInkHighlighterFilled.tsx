import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatInkHighlighterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatInkHighlighterFilled'

      short_name='FormatInkHighlighter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 24v-4h20v4Zm1.5-6 3.15-3.15-.05-.05q-.6-.6-.6-1.4 0-.8.6-1.4l4.275-4.275 5.4 5.4L12 17.4q-.6.6-1.4.6-.8 0-1.4-.6l-.05-.05-.65.65Zm14.2-6.3-5.4-5.4L16 2.6q.6-.6 1.4-.6.8 0 1.4.6l2.6 2.6q.6.6.6 1.4 0 .8-.6 1.4Z"/>
    </Icon>
  );
});

IconMaterialFormatInkHighlighterFilled.displayName = 'AmauiIconMaterialFormatInkHighlighterFilled';

export default IconMaterialFormatInkHighlighterFilled;
