import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveW100Filled'

      short_name='Move'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 765q-5 0-7.5-3t-4.5-7q-12-29-27.5-51T370 662q-21-28-37.5-56T316 536q0-51 36.5-87.5T440 412q51 0 87.5 36.5T564 536q0 42-16.5 70T510 662q-15 20-30.5 42T452 755q-2 5-4.5 7.5T440 765Zm0-189q17 0 28.5-11.5T480 536q0-17-11.5-28.5T440 496q-17 0-28.5 11.5T400 536q0 17 11.5 28.5T440 576Zm0 308q-128 0-218-90t-90-218q0-64 24-120t66-98q42-42 98-66t120-24q64 0 120 24t98 66q42 42 66 98t24 120v71l81-81q4-4 9.5-4.5t9.5 3.5q5 4 4.5 10t-4.5 10l-93 93q-9 9-21 9t-21-9l-93-93q-4-4-4.5-10t4.5-10q4-4 10-3.5t10 4.5l80 80v-70q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 117 81.5 198.5T440 856q51 0 94.5-16.5T616 793q5-4 11-4.5t11 4.5q5 4 5 10t-5 10q-42 34-93 52.5T440 884Z"/>
    </Icon>
  );
});

IconMaterialMoveW100Filled.displayName = 'AmauiIconMaterialMoveW100Filled';

export default IconMaterialMoveW100Filled;
