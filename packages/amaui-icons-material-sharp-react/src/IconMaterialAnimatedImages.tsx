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
      <path d="m480-420 240-160-240-160v320Zm33 220h217l7 53-587 72-74-597 125-14v80l-36 4 54 438 294-36Zm-232-80v-600h600v600H281Zm80-80h440v-440H361v440ZM219-164Zm362-416Z"/>
    </Icon>
  );
});

IconMaterialAnimatedImages.displayName = 'AmauiIconMaterialAnimatedImages';

export default IconMaterialAnimatedImages;
