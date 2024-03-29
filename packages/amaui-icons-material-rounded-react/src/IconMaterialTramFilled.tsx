import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTramFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TramFilled'

      short_name='Tram'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.425 22.975q-.5-.125-.637-.625-.138-.5.212-.85l.5-.5q-1.475 0-2.487-1.012Q4 18.975 4 17.5V8q0-2.425 2.125-3.175T11 4l.75-1.5h-4q-.325 0-.537-.213Q7 2.075 7 1.75q0-.325.213-.538Q7.425 1 7.75 1h8.5q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213h-2.5L13 4q2.975.075 4.988.812Q20 5.55 20 8v9.5q0 1.475-1.012 2.488Q17.975 21 16.5 21l.5.5q.35.35.212.85-.137.5-.637.625-.225.05-.437 0-.213-.05-.388-.225L14 21h-4l-1.75 1.75q-.175.175-.387.225-.213.05-.438 0ZM12 18q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 15 12 15t-1.062.438q-.438.437-.438 1.062t.438 1.062Q11.375 18 12 18Zm-6-6h12V9H6Z"/>
    </Icon>
  );
});

IconMaterialTramFilled.displayName = 'AmauiIconMaterialTramFilled';

export default IconMaterialTramFilled;
