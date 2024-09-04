import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnimatedImagesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnimatedImagesFilled'

      short_name='AnimatedImages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-461 128-86q18-12 18-33t-18-33l-128-86q-20-14-41-2t-21 36v170q0 24 21 36t41-2ZM361-280q-33 0-56.5-23.5T281-360v-440q0-33 23.5-56.5T361-880h440q33 0 56.5 23.5T881-800v440q0 33-23.5 56.5T801-280H361ZM229-85q-33 5-59-16t-30-54L86-592q-4-33 16.5-59t53.5-30l45-5v366q0 50 35 85t85 35h411q-6 24-24 41.5T664-138L229-85Z"/>
    </Icon>
  );
});

IconMaterialAnimatedImagesFilled.displayName = 'AmauiIconMaterialAnimatedImagesFilled';

export default IconMaterialAnimatedImagesFilled;
