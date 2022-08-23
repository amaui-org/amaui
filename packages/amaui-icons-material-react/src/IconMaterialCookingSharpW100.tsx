import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCookingSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookingSharpW100'
      short_name='Cooking'

      {...props}
    >
      <path d="M10.3 18.75V17.2q0-.35-.225-.575Q9.85 16.4 9.5 16.4H3.95v-.7H9.5q.625 0 1.062.437.438.438.438 1.063v1.55Zm2.7 0V17.2q0-.625.438-1.063.437-.437 1.062-.437h5.55v.7H14.5q-.35 0-.575.225-.225.225-.225.575v1.55ZM6.65 13.7q-.975 0-1.662-.688-.688-.687-.688-1.662V8.9h15.4v2.45q0 .975-.687 1.662-.688.688-1.663.688Zm0-.7h10.7q.675 0 1.163-.488.487-.487.487-1.162V9.6H5v1.75q0 .675.488 1.162Q5.975 13 6.65 13ZM4.3 6.9v-.7h5.35v-.25q0-.325.213-.538.212-.212.537-.212h3.2q.325 0 .538.212.212.213.212.538v.25h5.35v.7Zm7.7 4.4Z"/>
    </Icon>
  );
});

IconMaterialCookingSharpW100.displayName = 'AmauiIconMaterialCookingSharpW100';

export default IconMaterialCookingSharpW100;
