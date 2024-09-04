import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMotionPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MotionPlayW100Filled'

      short_name='MotionPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m420-360 180-120-180-120v240Zm60 228q-72 0-135.5-27T234-233q-47-47-74.5-110T132-478q0-34 6-67t18-65l22 22q-9 26-13.5 53t-4.5 55q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93q-27 0-53.5 4.5T374-782l-22-22q29-11 59.5-17.5T474-828q73 0 137.5 27T724-726.5q48 47.5 76 111T828-480q0 72-27.5 135.5T726-234q-47 47-110.5 74.5T480-132ZM242-690q-11 0-19.5-8.5T214-718q0-11 8.5-19.5T242-746q11 0 19.5 8.5T270-718q0 11-8.5 19.5T242-690Zm-2 210q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70q-100 0-170-70t-70-170Z"/>
    </Icon>
  );
});

IconMaterialMotionPlayW100Filled.displayName = 'AmauiIconMaterialMotionPlayW100Filled';

export default IconMaterialMotionPlayW100Filled;
