import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiFlagsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFlagsRounded'
      short_name='EmojiFlags'

      {...props}
    >
      <path d="M6 21q-.425 0-.713-.288Q5 20.425 5 20V5q0-.425.287-.713Q5.575 4 6 4h7.175q.35 0 .625.225t.35.575L14.4 6H19q.425 0 .712.287Q20 6.575 20 7v8q0 .425-.288.712Q19.425 16 19 16h-5.175q-.35 0-.625-.225t-.35-.575L12.6 14H7v6q0 .425-.287.712Q6.425 21 6 21Zm6.5-11Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z"/>
    </Icon>
  );
});

IconMaterialEmojiFlagsRounded.displayName = 'AmauiIconMaterialEmojiFlagsRounded';

export default IconMaterialEmojiFlagsRounded;
