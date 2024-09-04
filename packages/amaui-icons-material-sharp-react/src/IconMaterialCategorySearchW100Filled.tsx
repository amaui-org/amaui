import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCategorySearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySearchW100Filled'

      short_name='CategorySearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-192v-240h240v240H132Zm172-420 148-244 148 244H304Zm561 512L761-204q-18 15-40.5 23.5T672-172q-59 0-99.5-40.5T532-312q0-59 40.5-99.5T672-452q59 0 99.5 40.5T812-312q0 26-8.5 48T781-224l104 104-20 20ZM672-200q47 0 79.5-32.5T784-312q0-47-32.5-79.5T672-424q-47 0-79.5 32.5T560-312q0 47 32.5 79.5T672-200Z"/>
    </Icon>
  );
});

IconMaterialCategorySearchW100Filled.displayName = 'AmauiIconMaterialCategorySearchW100Filled';

export default IconMaterialCategorySearchW100Filled;
