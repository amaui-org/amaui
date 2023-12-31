import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubbleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleW100'

      short_name='Bubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-788q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24q-35 0-72.5-8.5T339-206l21-21q26 13 58.5 20t61.5 7q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 32 6.5 61t20.5 58l-21 21q-17-30-25.5-67.5T172-480q0-64 24-120t66-98q42-42 98-66t120-24Zm66 442v-180L196-176l-20-20 350-350H346v-28h228v228h-28Z"/>
    </Icon>
  );
});

IconMaterialBubbleW100.displayName = 'AmauiIconMaterialBubbleW100';

export default IconMaterialBubbleW100;
