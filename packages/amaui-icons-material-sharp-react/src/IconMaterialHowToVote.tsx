import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHowToVote = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HowToVote'

      short_name='HowToVote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.175 16h13.65l-1.95-2.2 1.425-1.425L21 15.45V22H3v-6.55l2.75-3.125 1.425 1.425Zm6.875-.2L5.7 9.45l7.775-7.775 6.35 6.35Zm0-2.825L17 8.025 13.475 4.5l-4.95 4.95ZM5 20h14v-2H5Zm0 0v-2 2Z"/>
    </Icon>
  );
});

IconMaterialHowToVote.displayName = 'AmauiIconMaterialHowToVote';

export default IconMaterialHowToVote;
