import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSavedSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SavedSearchW100'

      short_name='SavedSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.45 19.9-6.25-6.25q-.75.65-1.725 1Q10.5 15 9.55 15q-2.3 0-3.9-1.6t-1.6-3.9q0-2.3 1.6-3.9T9.55 4q2.3 0 3.9 1.6t1.6 3.9q0 1.025-.375 2-.375.975-.975 1.65l6.25 6.25Zm-9.9-5.6q2.025 0 3.413-1.388Q14.35 11.525 14.35 9.5t-1.387-3.413Q11.575 4.7 9.55 4.7T6.138 6.087Q4.75 7.475 4.75 9.5t1.388 3.412Q7.525 14.3 9.55 14.3ZM8.3 11.4l.45-1.5-1.3-1.05h1.6l.5-1.55.5 1.55h1.6l-1.3 1.05.45 1.5-1.25-.95Z"/>
    </Icon>
  );
});

IconMaterialSavedSearchW100.displayName = 'AmauiIconMaterialSavedSearchW100';

export default IconMaterialSavedSearchW100;
