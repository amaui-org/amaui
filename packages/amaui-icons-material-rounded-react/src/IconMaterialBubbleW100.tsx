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
      <path d="M480-788q64 0 120 24t98 66q42 42 66 98t24 120q0 64-24 120t-66 98q-42 42-98 66t-120 24q-29 0-59.5-6T362-195q-6-2-8.5-8t.5-11q3-5 8.5-7t11.5 0q24 10 52.5 15.5T480-200q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 28 4.5 53.5T220-376q2 6 1 12t-7 8q-6 2-12-.5t-8-8.5q-11-27-16.5-57t-5.5-58q0-64 24-120t66-98q42-42 98-66t120-24Zm66 262L206-186q-4 4-9.5 4.5T186-186q-5-5-5-10t5-10l340-340H360q-6 0-10-4t-4-10q0-6 4-10t10-4h184q13 0 21.5 8.5T574-544v184q0 6-4 10t-10 4q-6 0-10-4t-4-10v-166Z"/>
    </Icon>
  );
});

IconMaterialBubbleW100.displayName = 'AmauiIconMaterialBubbleW100';

export default IconMaterialBubbleW100;
