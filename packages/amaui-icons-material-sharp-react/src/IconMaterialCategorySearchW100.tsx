import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCategorySearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategorySearchW100'

      short_name='CategorySearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-192v-240h240v240H132Zm28-28h184v-184H160v184Zm144-392 148-244 148 244H304Zm48-28h200L452-800 352-640Zm513 540L761-204q-18 15-40.5 23.5T672-172q-59 0-99.5-40.5T532-312q0-59 40.5-99.5T672-452q59 0 99.5 40.5T812-312q0 26-8.5 48T781-224l104 104-20 20ZM671.97-200q47.03 0 79.53-32.47t32.5-79.5q0-47.03-32.47-79.53t-79.5-32.5q-47.03 0-79.53 32.47t-32.5 79.5q0 47.03 32.47 79.53t79.5 32.5ZM344-404Zm108-236Z"/>
    </Icon>
  );
});

IconMaterialCategorySearchW100.displayName = 'AmauiIconMaterialCategorySearchW100';

export default IconMaterialCategorySearchW100;
