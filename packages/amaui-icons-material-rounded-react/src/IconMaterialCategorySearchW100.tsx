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
      <path d="M161.76-192q-12.76 0-21.26-8.63-8.5-8.64-8.5-21.4v-180.21q0-12.76 8.63-21.26 8.64-8.5 21.4-8.5h180.21q12.76 0 21.26 8.63 8.5 8.64 8.5 21.4v180.21q0 12.76-8.63 21.26-8.64 8.5-21.4 8.5H161.76ZM160-220h184v-184H160v184Zm387-392H357q-17 0-25.5-15.5t.5-30.5l94-156q9.21-14 26.11-14Q469-828 478-814l94 156q9 15 .5 30.5T547-612Zm-195-28h200L452-800 352-640Zm503 530-94-94q-18 15-40.5 23.5T672-172q-59 0-99.5-40.5T532-312q0-59 40.5-99.5T672-452q59 0 99.5 40.5T812-312q0 26-8.5 48T781-224l94 94q4 4 4.5 9.5T875-110q-5 5-10 5t-10-5Zm-183.03-90q47.03 0 79.53-32.47t32.5-79.5q0-47.03-32.47-79.53t-79.5-32.5q-47.03 0-79.53 32.47t-32.5 79.5q0 47.03 32.47 79.53t79.5 32.5ZM344-404Zm108-236Z"/>
    </Icon>
  );
});

IconMaterialCategorySearchW100.displayName = 'AmauiIconMaterialCategorySearchW100';

export default IconMaterialCategorySearchW100;
