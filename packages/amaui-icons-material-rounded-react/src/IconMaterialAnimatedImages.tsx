import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnimatedImages = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnimatedImages'

      short_name='AnimatedImages'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m542-461 128-86q18-12 18-33t-18-33l-128-86q-20-14-41-2t-21 36v170q0 24 21 36t41-2ZM361-280q-33 0-56.5-23.5T281-360v-440q0-33 23.5-56.5T361-880h440q33 0 56.5 23.5T881-800v440q0 33-23.5 56.5T801-280H361Zm0-80h440v-440H361v440Zm220-220ZM228-85q-33 4-59.5-16T138-154L86-592q-4-33 16.5-58.5T156-681h2q17-3 30.5 9t13.5 30q0 15-10.5 26T166-602h-1l54 438 474-58q17-2 30 8t15 27q2 17-8 29.5T703-143L228-85Zm-9-79Z"/>
    </Icon>
  );
});

IconMaterialAnimatedImages.displayName = 'AmauiIconMaterialAnimatedImages';

export default IconMaterialAnimatedImages;
