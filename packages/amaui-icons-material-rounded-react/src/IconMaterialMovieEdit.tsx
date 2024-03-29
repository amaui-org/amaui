import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovieEdit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovieEdit'

      short_name='MovieEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3l2 4h3L7 3h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.587Q22 4.175 22 5v4H4v8h8v2Zm14.3-6.475 1.075 1.075-3.875 3.85v1.05h1.05l3.875-3.85 1.05 1.05-4 4q-.15.15-.338.225-.187.075-.387.075H14.5q-.2 0-.35-.15-.15-.15-.15-.35v-2.25q0-.2.075-.387.075-.188.225-.338Zm3.175 3.175L18.3 12.525l1.45-1.45q.275-.275.7-.275.425 0 .7.275l1.775 1.775q.275.275.275.7 0 .425-.275.7Z"/>
    </Icon>
  );
});

IconMaterialMovieEdit.displayName = 'AmauiIconMaterialMovieEdit';

export default IconMaterialMovieEdit;
