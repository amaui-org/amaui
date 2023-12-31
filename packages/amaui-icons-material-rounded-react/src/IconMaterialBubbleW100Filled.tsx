import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBubbleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BubbleW100Filled'

      short_name='Bubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-788q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24q-32 0-65.5-7T352-200q-5-2-5.5-7t3.5-9q5-5 11-6t12 1q25 10 53.5 15.5T480-200q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 28 5 53.5t16 51.5q2 6 1 13t-6 12q-4 4-9.5 2.5T199-354q-14-29-20.5-62t-6.5-64q0-64 24-120t66-98q42-42 98-66t120-24Zm66 262L206-186q-4 4-9.5 4.5T186-186q-5-5-5-10t5-10l340-340H360q-6 0-10-4t-4-10q0-6 4-10t10-4h184q13 0 21.5 8.5T574-544v184q0 6-4 10t-10 4q-6 0-10-4t-4-10v-166Z"/>
    </Icon>
  );
});

IconMaterialBubbleW100Filled.displayName = 'AmauiIconMaterialBubbleW100Filled';

export default IconMaterialBubbleW100Filled;
