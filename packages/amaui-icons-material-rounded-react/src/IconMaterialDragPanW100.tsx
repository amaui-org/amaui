import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragPanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragPanW100'

      short_name='DragPan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 590H170l90 90q4 4 4.5 9.5T260 700q-5 5-10 5t-10-5L137 597q-9-9-9-21t9-21l103-103q4-4 9.5-4.5T260 452q5 5 5 10t-5 10l-90 90h296V266l-90 90q-4 4-9.5 4.5T356 356q-5-5-5-10t5-10l103-103q9-9 21-9t21 9l103 103q4 4 4.5 9.5T604 356q-5 5-10 5t-10-5l-90-90v296h296l-90-90q-4-4-4.5-9.5T700 452q5-5 10-5t10 5l103 103q9 9 9 21t-9 21L720 700q-4 4-9.5 4.5T700 700q-5-5-5-10t5-10l90-90H494v296l90-90q4-4 9.5-4.5T604 796q5 5 5 10t-5 10L501 919q-9 9-21 9t-21-9L356 816q-4-4-4.5-9.5T356 796q5-5 10-5t10 5l90 90V590Z"/>
    </Icon>
  );
});

IconMaterialDragPanW100.displayName = 'AmauiIconMaterialDragPanW100';

export default IconMaterialDragPanW100;
