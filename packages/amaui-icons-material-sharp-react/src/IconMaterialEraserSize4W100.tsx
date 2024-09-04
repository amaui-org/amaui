import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEraserSize4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize4W100'

      short_name='EraserSize4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M404-212q-79.73 0-135.86-56.03Q212-324.06 212-403.65 212-441 226-476q14-35 42-64l152-152q28-28 63.4-42 35.41-14 72.84-14Q636-748 692-691.97q56 56.03 56 135.62 0 37.35-14 72.85-14 35.5-42 63.5L540-268q-29 28-64 42-34.99 14-72 14Z"/>
    </Icon>
  );
});

IconMaterialEraserSize4W100.displayName = 'AmauiIconMaterialEraserSize4W100';

export default IconMaterialEraserSize4W100;
