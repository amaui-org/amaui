import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCirclesExtW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CirclesExtW100Filled'

      short_name='CirclesExt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-49.5 0-84.75-35.25T120-280q0-49.5 35.25-84.75T240-400q49.5 0 84.75 35.25T360-280q0 49.5-35.25 84.75T240-160Zm480 0q-49.5 0-84.75-35.25T600-280q0-49.5 35.25-84.75T720-400q49.5 0 84.75 35.25T840-280q0 49.5-35.25 84.75T720-160ZM480-384q-23 0-39.5-16.5T424-440q0-23 16.5-39.5T480-496q23 0 39.5 16.5T536-440q0 23-16.5 39.5T480-384Zm0-216q-49.5 0-84.75-35.25T360-720q0-49.5 35.25-84.75T480-840q49.5 0 84.75 35.25T600-720q0 49.5-35.25 84.75T480-600Z"/>
    </Icon>
  );
});

IconMaterialCirclesExtW100Filled.displayName = 'AmauiIconMaterialCirclesExtW100Filled';

export default IconMaterialCirclesExtW100Filled;
