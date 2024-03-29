import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMediaLink = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MediaLink'

      short_name='MediaLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.825 17.425-2.55 1.6q-.25.15-.512.013Q7.5 18.9 7.5 18.6v-3.2q0-.3.263-.438.262-.137.512.013l2.55 1.6q.25.15.25.425t-.25.425ZM13 10q-1.25 0-2.125-.875T10 7q0-1.25.875-2.125T13 4h.5q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213H13q-.625 0-1.062.438Q11.5 6.375 11.5 7t.438 1.062Q12.375 8.5 13 8.5h.5q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm4 0h-.5q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538.212-.212.537-.212h.5q.625 0 1.062-.438Q18.5 7.625 18.5 7t-.438-1.062Q17.625 5.5 17 5.5h-.5q-.325 0-.537-.213-.213-.212-.213-.537 0-.325.213-.538Q16.175 4 16.5 4h.5q1.25 0 2.125.875T20 7q0 1.25-.875 2.125T17 10Zm-.75-2.25h-2.5q-.325 0-.537-.213Q13 7.325 13 7q0-.325.213-.537.212-.213.537-.213h2.5q.325 0 .538.213Q17 6.675 17 7q0 .325-.212.537-.213.213-.538.213ZM16.1 14v-2H21V3H9v9H7V3q0-.825.588-1.413Q8.175 1 9 1h12q.825 0 1.413.587Q23 2.175 23 3v9q0 .825-.587 1.412Q21.825 14 21 14ZM3 23q-.825 0-1.412-.587Q1 21.825 1 21v-8q0-.825.588-1.413Q2.175 11 3 11h12q.825 0 1.413.587Q17 12.175 17 13v8q0 .825-.587 1.413Q15.825 23 15 23Zm0-2h12v-8H3v8ZM15 7.5ZM9 17Z"/>
    </Icon>
  );
});

IconMaterialMediaLink.displayName = 'AmauiIconMaterialMediaLink';

export default IconMaterialMediaLink;
