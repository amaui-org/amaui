import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesW100Filled'

      short_name='Subtitles'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.1 11.8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 3.45h7.1q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm9.8 0q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM9.8 11.8h7.1q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H9.8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-5 6.9q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesW100Filled.displayName = 'AmauiIconMaterialSubtitlesW100Filled';

export default IconMaterialSubtitlesW100Filled;
