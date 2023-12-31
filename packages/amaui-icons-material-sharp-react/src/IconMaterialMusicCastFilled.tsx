import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMusicCastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicCastFilled'

      short_name='MusicCast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-160q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T640-458v-342h240v120H720v360q0 66-47 113t-113 47ZM80-320q0-99 38-186.5T221-659q65-65 152.5-103T560-800v80q-82 0-155 31.5t-127.5 86q-54.5 54.5-86 127T160-320H80Zm160 0q0-66 25.5-124.5t69-102Q378-590 436-615t124-25v80q-100 0-170 70t-70 170h-80Z"/>
    </Icon>
  );
});

IconMaterialMusicCastFilled.displayName = 'AmauiIconMaterialMusicCastFilled';

export default IconMaterialMusicCastFilled;
