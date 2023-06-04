import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebStoriesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebStoriesW100'

      short_name='WebStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.15 19.475V4.5q.525.125.863.537.337.413.337.963v11.975q0 .55-.337.963-.338.412-.863.537ZM6.25 21q-.625 0-1.062-.438-.438-.437-.438-1.062v-15q0-.625.438-1.062Q5.625 3 6.25 3h8.7q.625 0 1.062.438.438.437.438 1.062v15q0 .625-.438 1.062-.437.438-1.062.438Zm12.8-3.025V6q.325.125.512.387.188.263.188.613v9.975q0 .35-.188.612-.187.263-.512.388ZM6.25 20.3h8.7q.3 0 .55-.25.25-.25.25-.55v-15q0-.3-.25-.55-.25-.25-.55-.25h-8.7q-.3 0-.55.25-.25.25-.25.55v15q0 .3.25.55.25.25.55.25Zm-.8-16.6v16.6V3.7Z"/>
    </Icon>
  );
});

IconMaterialWebStoriesW100.displayName = 'AmauiIconMaterialWebStoriesW100';

export default IconMaterialWebStoriesW100;
