import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffFilled'

      short_name='SubtitlesOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 10h-5.15l-6-6H22v15.15L14.85 12H18Zm2.55 13.35L17.15 20H2V4h2v2.8L.65 3.45l1.4-1.4 19.9 19.9ZM11.15 14H6v2h7.15ZM6 12h2v-1.2l-.8-.8H6Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffFilled.displayName = 'AmauiIconMaterialSubtitlesOffFilled';

export default IconMaterialSubtitlesOffFilled;
