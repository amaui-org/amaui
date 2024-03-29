import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesFilled'

      short_name='Subtitles'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 12h2v-2H6Zm0 4h8v-2H6Zm10 0h2v-2h-2Zm-6-4h8v-2h-8Zm-8 8V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesFilled.displayName = 'AmauiIconMaterialSubtitlesFilled';

export default IconMaterialSubtitlesFilled;
