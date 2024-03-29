import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeselectFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeselectFilled'

      short_name='Deselect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.6-5.6-5.6H7V9.825l-5.6-5.6L2.8 2.8l18.4 18.4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19h2Zm-2-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm4 12v-2h2v2Zm.825-16L7 4.175V3h2v2ZM9 15h3.175L9 11.825Zm8-.825-2-2V9h-3.175l-2-2H17ZM11 21v-2h2v2Zm0-16V3h2v2Zm4 16v-2h2v2Zm0-16V3h2v2Zm4.825 12L19 16.175V15h2v2ZM19 13v-2h2v2Zm0-4V7h2v2Zm0-4V3q.825 0 1.413.587Q21 4.175 21 5Z"/>
    </Icon>
  );
});

IconMaterialDeselectFilled.displayName = 'AmauiIconMaterialDeselectFilled';

export default IconMaterialDeselectFilled;
