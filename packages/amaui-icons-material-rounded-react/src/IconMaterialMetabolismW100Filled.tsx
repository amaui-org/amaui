import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMetabolismW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MetabolismW100Filled'

      short_name='Metabolism'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M406 768V648h-50V540q0-17 23.5-28.5T440 500q37 0 60.5 11.5T524 540v108h-50v120h-68Zm34-296q-18 0-31-13t-13-31q0-18 13-31t31-13q18 0 31 13t13 31q0 18-13 31t-31 13Zm0 412q-128 0-218-90t-90-218q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120v71l81-81q2-2 4.5-3t5-1q2.5 0 5 .5t4.5 2.5q5 4 4.5 10t-4.5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l80 80v-70q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 117 81.5 198.5T440 856q51 0 94.5-16.5T616 793q5-4 11-4.5t11 4.5q5 4 5 10t-5 10q-42 34-93 52.5T440 884Z"/>
    </Icon>
  );
});

IconMaterialMetabolismW100Filled.displayName = 'AmauiIconMaterialMetabolismW100Filled';

export default IconMaterialMetabolismW100Filled;
